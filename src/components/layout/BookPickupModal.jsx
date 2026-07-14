import React, { useState } from 'react';
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Clock,
  WashingMachine,
  Sparkles,
  Wind,
  ShirtIcon,
  Bed,
  Footprints,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileText,
  Briefcase
} from 'lucide-react';

const services = [
  { id: 'wash-fold', label: 'Wash & Fold', icon: WashingMachine, desc: 'Everyday laundry clean' },
  { id: 'dry-cleaning', label: 'Dry Cleaning', icon: Sparkles, desc: 'Delicate fabric care' },
  { id: 'express', label: 'Express Service', icon: Wind, desc: 'Ready within 24 hours' },
  { id: 'ironing', label: 'Ironing & Pressing', icon: ShirtIcon, desc: 'Crisp & wrinkle-free' },
  { id: 'linens', label: 'Bedding & Linens', icon: Bed, desc: 'Deep hygienic wash' },
  { id: 'shoes', label: 'Shoe Cleaning', icon: Footprints, desc: 'Premium deep refresh' },
];

const timeSlots = ['8:00 AM – 11:00 AM', '12:00 PM – 3:00 PM', '4:00 PM – 7:00 PM'];
const clothTypes = ['Shirts', 'Trousers', 'Suits', 'Dresses', 'Bedding', 'Curtains', 'Shoes', 'Other'];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  address: '',
  date: '',
  timeSlot: '',
  service: '',
  items: [],
  instructions: '',
};

export default function BookPickupModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const toggleItem = (item) =>
    setForm((f) => ({
      ...f,
      items: f.items.includes(item) ? f.items.filter((i) => i !== item) : [...f.items, item],
    }));

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    console.log('Premium booking process finalized:', form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setForm(initialForm);
      setStep(1);
      setSubmitted(false);
    }, 250);
  };

  // Step Validation checks
  const isStep1Valid = form.name && form.phone && form.address;
  const isStep2Valid = form.service;
  const isStep3Valid = form.date && form.timeSlot;

  const activeServiceObj = services.find(s => s.id === form.service);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Main Container */}
      <div className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl shadow-slate-950/40 overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom sm:zoom-in-95">
        
        {/* Header Area */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="font-['Nunito'] text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Book a Pickup
            </h2>
            {!submitted && (
              <p className="font-['Open_Sans'] text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">
                Step {step} of 3 — {step === 1 ? "Contact & Location" : step === 2 ? "Select Service" : "Schedule Details"}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dynamic Progress Timeline Line */}
        {!submitted && (
          <div className="w-full bg-slate-100 h-1 shrink-0">
            <div 
              className="bg-blue-600 h-1 transition-all duration-300 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Scrollable Main Form Panel */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 flex-1 bg-white">
          {submitted ? (
            /* Final Success Layout */
            <div className="flex flex-col items-center text-center py-10 animate-in zoom-in-95 duration-300">
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 shadow-xl shadow-emerald-500/10">
                <CheckCircle2 size={42} strokeWidth={1.5} />
              </span>
              <h3 className="font-['Nunito'] mt-6 text-2xl font-extrabold text-slate-800 tracking-tight">
                Everything is set!
              </h3>
              <p className="font-['Open_Sans'] mt-3 text-sm sm:text-base text-slate-500 max-w-sm leading-relaxed">
                Your scheduling window for <span className="font-semibold text-slate-800">{form.date}</span> ({form.timeSlot}) has been verified. Our courier will ping you when nearby.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-8 px-8 py-3 rounded-full bg-slate-900 font-['Nunito'] font-bold text-sm text-white shadow-lg hover:bg-slate-800 transition-all duration-200"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1: Personal Info & Address */}
              {step === 1 && (
                <div className="flex flex-col gap-5 animate-in slide-in-from-right-4 duration-200">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <User size={13} className="text-blue-500" /> Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Doe"
                        className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Phone size={13} className="text-blue-500" /> Contact Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="(555) 000-0000"
                        className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Mail size={13} className="text-blue-500" /> Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@example.com"
                      className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="address" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <MapPin size={13} className="text-blue-500" /> Address Location
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      value={form.address}
                      onChange={update('address')}
                      placeholder="Street number, Apartment suite, City, ZIP code"
                      className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Service Preference */}
              {step === 2 && (
                <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(({ id, label, icon: Icon, desc }) => {
                      const isSelected = form.service === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, service: id }))}
                          className={`flex items-start text-left gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                            isSelected
                              ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/50'
                          }`}
                        >
                          <span className={`p-2.5 rounded-xl border ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-50 border-slate-100 text-slate-500'}`}>
                            <Icon size={20} />
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="font-['Nunito'] text-sm font-extrabold text-slate-800">
                              {label}
                            </span>
                            <span className="font-['Open_Sans'] text-xs text-slate-400 mt-0.5 truncate">
                              {desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2.5 mt-2">
                    <label className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500">
                      Estimated Content Mix <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {clothTypes.map((item) => {
                        const isChecked = form.items.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleItem(item)}
                            className={`rounded-xl px-3.5 py-2 font-['Nunito'] text-xs font-bold border transition-all duration-150 ${
                              isChecked
                                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Timeline & Overview Confirmation */}
              {step === 3 && (
                <div className="flex flex-col gap-5 animate-in slide-in-from-right-4 duration-200">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="date" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-blue-500" /> Pickup Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={update('date')}
                        className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="timeSlot" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Clock size={13} className="text-blue-500" /> Arrival Slot
                      </label>
                      <div className="relative">
                        <select
                          id="timeSlot"
                          value={form.timeSlot}
                          onChange={update('timeSlot')}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Choose window</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="instructions" className="font-['Open_Sans'] text-xs font-bold uppercase tracking-wider text-slate-500">
                      Driver Instructions <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="instructions"
                      type="text"
                      value={form.instructions}
                      onChange={update('instructions')}
                      placeholder="E.g., leave by front porch, call upon arrival"
                      className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Summary Card Box */}
                  <div className="mt-2 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-3">
                    <span className="font-['Open_Sans'] text-[11px] font-bold tracking-wider uppercase text-slate-400 block">
                      Order Summary Check
                    </span>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Briefcase size={14} className="text-slate-400 shrink-0" />
                        <span className="truncate">{activeServiceObj ? activeServiceObj.label : "None selected"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <User size={14} className="text-slate-400 shrink-0" />
                        <span className="truncate">{form.name || "Missing data"}</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600 col-span-2">
                        <MapPin size={14} className="text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{form.address || "No target address entered"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Action Footer Row */}
        {!submitted && (
          <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4 shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 font-['Nunito'] font-bold text-sm text-slate-600 hover:text-slate-900 transition-colors py-2 px-1"
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <div className="w-px" /> /* Spacer placeholder balance */
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-['Nunito'] font-bold text-sm shadow-md shadow-blue-500/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={15} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isStep3Valid}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-['Nunito'] font-bold text-sm shadow-md transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Schedule Pickup <FileText size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}