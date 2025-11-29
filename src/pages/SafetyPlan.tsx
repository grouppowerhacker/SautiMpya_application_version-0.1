import { useState } from 'react';
import { Download, Plus, Trash2, RefreshCw, ShieldAlert } from 'lucide-react';
import jsPDF from 'jspdf';

interface PlanSection {
  title: string;
  items: string[];
}

export function SafetyPlan() {
  const initialSections: PlanSection[] = [
    { title: 'Safe People to Contact', items: [''] },
    { title: 'Safe Places to Go', items: [''] },
    { title: 'Important Documents to Take', items: ['ID card', 'Birth certificates', 'Bank documents', 'Medical records'] },
    { title: 'Essential Items to Pack', items: ['Phone charger', 'Money', 'Medications', 'Keys', 'Clothes'] },
    { title: 'Signs That I Need to Leave Immediately', items: [''] },
    { title: 'My Code Word for Emergency', items: [''] },
  ];

  const [sections, setSections] = useState<PlanSection[]>(JSON.parse(JSON.stringify(initialSections)));

  const updateItem = (sectionIndex: number, itemIndex: number, value: string) => {
    const newSections = [...sections];
    newSections[sectionIndex].items[itemIndex] = value;
    setSections(newSections);
  };

  const addItem = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].items.push('');
    setSections(newSections);
  };

  const removeItem = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    if (newSections[sectionIndex].items.length > 1) {
      newSections[sectionIndex].items.splice(itemIndex, 1);
      setSections(newSections);
    }
  };

  const resetPlan = () => {
    if (window.confirm('Are you sure you want to clear all details? This cannot be undone.')) {
      setSections(JSON.parse(JSON.stringify(initialSections)));
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;

    doc.setFontSize(20);
    doc.setTextColor(43, 158, 179);
    doc.text('My Personal Safety Plan', 20, yPosition);

    yPosition += 10;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Sauti Mpya - Keep this document in a safe, private place', 20, yPosition);

    yPosition += 15;

    sections.forEach(section => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(14);
      doc.setTextColor(30, 106, 140);
      doc.text(section.title, 20, yPosition);
      yPosition += 8;

      section.items.forEach(item => {
        if (item.trim()) {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }
          doc.setFontSize(11);
          doc.setTextColor(60, 60, 60);

          const lines = doc.splitTextToSize(`• ${item}`, 170);
          lines.forEach((line: string) => {
            doc.text(line, 25, yPosition);
            yPosition += 6;
          });
        }
      });

      yPosition += 5;
    });

    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    yPosition += 10;
    doc.setFontSize(12);
    doc.setTextColor(220, 53, 69);
    doc.text('EMERGENCY HELPLINES', 20, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const helplines = [
      'Kenya: 1195',
      'Nigeria: 0800 033 3333',
      'South Africa: 0800 428 428',
      'Ghana: 0800 800 800',
      'Uganda: 0800 200 600'
    ];

    helplines.forEach(line => {
      doc.text(line, 20, yPosition);
      yPosition += 6;
    });

    doc.save('my-safety-plan.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E6A8C] mb-2">Personal Safety Plan</h1>
            <p className="text-sm sm:text-base text-gray-700">Create a plan to keep yourself safe. Fill in as much as you can.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={resetPlan}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm sm:text-base"
            >
              <RefreshCw size={20} />
              Clear
            </button>
            <button
              onClick={downloadPDF}
              className="bg-[#2B9EB3] hover:bg-[#1E6A8C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm sm:text-base"
            >
              <Download size={20} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 mb-6 sm:mb-8 flex items-start gap-2 sm:gap-3">
          <ShieldAlert className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="font-bold text-blue-900 text-sm sm:text-base">Your Privacy is Our Priority</p>
            <p className="text-blue-800 text-xs sm:text-sm mt-1">
              We do not store any of the information you enter here.
              Your safety plan is generated only on your device.
              Once you leave or refresh this page, all data will be cleared permanently.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 mb-6 sm:mb-8">
          <p className="text-amber-900 text-xs sm:text-sm">
            <strong>Important:</strong> Keep this plan in a safe place where your abuser cannot find it.
            Consider giving a copy to someone you trust.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-l-4 border-[#2B9EB3] bg-gray-50 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-[#1E6A8C] mb-3 sm:mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => updateItem(sectionIndex, itemIndex, e.target.value)}
                      placeholder="Enter details..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2B9EB3] text-sm sm:text-base"
                    />
                    {section.items.length > 1 && (
                      <button
                        onClick={() => removeItem(sectionIndex, itemIndex)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addItem(sectionIndex)}
                  className="flex items-center gap-2 text-[#2B9EB3] hover:text-[#1E6A8C] font-semibold transition-colors text-sm sm:text-base"
                >
                  <Plus size={20} />
                  Add another item
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-lg">
          <h3 className="text-base sm:text-lg font-bold text-blue-900 mb-3">Additional Safety Tips:</h3>
          <ul className="space-y-2 text-blue-900 text-xs sm:text-sm">
            <li>• Keep your phone charged and with you at all times</li>
            <li>• Memorize important phone numbers</li>
            <li>• Have a bag packed with essentials ready to grab</li>
            <li>• Tell trusted friends/family about your situation</li>
            <li>• Change passwords and PINs regularly</li>
            <li>• Vary your routine to be less predictable</li>
            <li>• Trust your instincts - if you feel unsafe, you probably are</li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={downloadPDF}
            className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors inline-flex items-center gap-2"
          >
            <Download size={24} />
            Download My Safety Plan
          </button>
        </div>
      </div>
    </div>
  );
}
