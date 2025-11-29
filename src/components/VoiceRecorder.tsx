import { useState, useRef } from 'react';
import { Mic, Square, Loader2 } from 'lucide-react';
import { isAudioRecordingSupported, getSupportedAudioType, formatDuration, blobToFile } from '../utils/audioUtils';
import { transcribeAudio } from '../services/groqService';

interface VoiceRecorderProps {
  onTranscription: (text: string) => void;
  disabled?: boolean;
}

export function VoiceRecorder({ onTranscription, disabled = false }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    if (!isAudioRecordingSupported()) {
      setError('Audio recording is not supported in your browser');
      return;
    }

    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = getSupportedAudioType();
      const mediaRecorder = new MediaRecorder(stream, { mimeType });

      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const audioFile = blobToFile(audioBlob, `recording-${Date.now()}.webm`);

        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());

        // Transcribe the audio
        setIsProcessing(true);
        try {
          const transcription = await transcribeAudio(audioFile);
          onTranscription(transcription);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to transcribe audio');
        } finally {
          setIsProcessing(false);
          setRecordingDuration(0);
        }
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);

      // Start duration timer
      timerRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error('Error starting recording:', err);
      setError('Failed to access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const handleClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={disabled || isProcessing}
        className={`p-3 rounded-full transition-all ${
          isRecording
            ? 'bg-red-600 hover:bg-red-700 animate-pulse'
            : 'bg-[#FF6B35] hover:bg-[#e55a2b]'
        } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
        title={isRecording ? 'Stop recording' : 'Start voice recording'}
      >
        {isProcessing ? (
          <Loader2 size={24} className="animate-spin" />
        ) : isRecording ? (
          <Square size={24} />
        ) : (
          <Mic size={24} />
        )}
      </button>

      {isRecording && (
        <div className="text-sm text-red-600 font-medium">
          Recording: {formatDuration(recordingDuration)}
        </div>
      )}

      {isProcessing && (
        <div className="text-sm text-gray-600">
          Transcribing...
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 max-w-xs text-center">
          {error}
        </div>
      )}
    </div>
  );
}
