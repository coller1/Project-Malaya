"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegistrationData } from "@/types/registration";

export default function RegisterPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    city: "",
    currentOccupation: "",
    educationLevel: "",
    yearLevel: "",
    course: "",
    school: "",
    expectedGraduation: "",
    employmentStatus: "",
    previousCareer: "",
    yearsOfExperience: "",
    reasonForShift: "",
    currentJobAbroad: "",
    workingCountry: "",
    ofwYearsOfExperience: "",
    planToReturnToPH: "",
    returnTimeline: "",
    currentTrade: "",
    tradeYearsOfExperience: "",
    certifications: "",
    reasons: [],
    additionalGoals: "",
    careerGoal: "",
    industry: "",
    targetTimeline: "",
    targetSkills: [],
    careerStory: "",
    learningFormats: [],
    recommendationInterests: [],
  });

  const updateFormData = (field: keyof RegistrationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: keyof RegistrationData, value: string) => {
    const currentArray = formData[field] as string[];
    if (currentArray.includes(value)) {
      updateFormData(field, currentArray.filter(item => item !== value));
    } else {
      updateFormData(field, [...currentArray, value]);
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    router.push("/dashboard");
  };

  const totalSteps = 6;

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* Image Section - LEFT SIDE - FIXED - Hidden on mobile */}
        <div className="relative hidden h-full w-full flex-shrink-0 lg:block lg:w-1/2">
          <Image
            src="/abea012d-2b4b-4d3f-8b91-91b76bbad804.png"
            alt="Auth illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* Form Section - RIGHT SIDE - Scrollable - Full width on mobile */}
        <div className="relative flex h-full w-full flex-col overflow-y-auto lg:w-1/2">
          <div className="relative flex min-h-full flex-col p-4 sm:p-8 lg:p-12 xl:p-16">
            {/* Background overlay image in lower part */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 overflow-hidden opacity-20 lg:opacity-100">
              <Image
                src="/image 15.png"
                alt="Background pattern"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col">
            {/* MPath Logo */}
            <div className="mb-4 flex justify-center">
              <Image
                src="/MPATH%20LOGO.png"
                alt="MPath logo"
                width={200}
                height={200}
                className="block h-auto w-full max-w-[200px] object-contain dark:hidden"
              />
              <Image
                src="/DARKMODE.png"
                alt="MPath logo dark"
                width={200}
                height={200}
                className="hidden h-auto w-full max-w-[200px] object-contain dark:block"
              />
            </div>

            {/* Progress Bar */}
            <div className="mb-6 flex-shrink-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-[#0B5D4E] dark:text-[#7EE7D5]">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden dark:bg-slate-800">
                <div
                  className="h-full bg-[#0B5D4E] transition-all duration-300 dark:bg-[#7EE7D5]"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Scrollable Step Content */}
            <div className="mb-6">
              {currentStep === 1 && <Step1 formData={formData} updateFormData={updateFormData} />}
              {currentStep === 2 && <Step2 formData={formData} updateFormData={updateFormData} />}
              {currentStep === 3 && <Step3 formData={formData} updateFormData={updateFormData} toggleArrayField={toggleArrayField} />}
              {currentStep === 4 && <Step4 formData={formData} updateFormData={updateFormData} toggleArrayField={toggleArrayField} />}
              {currentStep === 5 && <Step5 formData={formData} toggleArrayField={toggleArrayField} />}
              {currentStep === 6 && <Step6 formData={formData} handleSubmit={handleSubmit} />}
            </div>

            {/* Navigation Buttons */}
            {currentStep < 6 && (
              <div className="flex flex-shrink-0 gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className={`${currentStep === 1 ? 'w-full' : 'flex-1'} rounded-2xl bg-[#0B5D4E] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]`}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Sign in link */}
            <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#0B5D4E] hover:underline dark:text-[#7EE7D5]">
                Sign in
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 1: About You
function Step1({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">About You</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Tell us a little about yourself so we can personalize your experience.</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">What is your full name?</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => updateFormData("fullName", e.target.value)}
          placeholder="John Doe"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Date of Birth</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Gender</label>
        <select
          value={formData.gender}
          onChange={(e) => updateFormData("gender", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => updateFormData("country", e.target.value)}
            placeholder="Philippines"
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData("city", e.target.value)}
            placeholder="Manila"
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
          />
        </div>
      </div>
    </div>
  );
}

// Step 2: Background
function Step2({ formData, updateFormData }: any) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">Your Background</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Help us understand your current academic and professional situation.</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Current Occupation</label>
        <select
          value={formData.currentOccupation}
          onChange={(e) => updateFormData("currentOccupation", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        >
          <option value="">Select occupation</option>
          <option value="Student">Student</option>
          <option value="Fresh Graduate">Fresh Graduate</option>
          <option value="Employed">Employed</option>
          <option value="OFW (Overseas Filipino Worker)">OFW (Overseas Filipino Worker)</option>
          <option value="Skilled Worker">Skilled Worker</option>
          <option value="Self-employed">Self-employed</option>
          <option value="Career Shifter">Career Shifter</option>
          <option value="Unemployed">Unemployed</option>
        </select>
      </div>

      {/* Career Shifter specific questions */}
      {formData.currentOccupation === "Career Shifter" && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Previous Career/Job Title</label>
            <input
              type="text"
              value={formData.previousCareer}
              onChange={(e) => updateFormData("previousCareer", e.target.value)}
              placeholder="e.g., Accountant, Teacher, Sales Manager"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Years of Experience in Previous Career</label>
            <select
              value={formData.yearsOfExperience}
              onChange={(e) => updateFormData("yearsOfExperience", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            >
              <option value="">Select years</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="More than 10 years">More than 10 years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Why are you shifting careers?</label>
            <textarea
              value={formData.reasonForShift}
              onChange={(e) => updateFormData("reasonForShift", e.target.value)}
              placeholder="Share your motivation for changing careers..."
              rows={3}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
        </>
      )}

      {/* OFW specific questions */}
      {formData.currentOccupation === "OFW (Overseas Filipino Worker)" && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Current Job/Role Abroad</label>
            <input
              type="text"
              value={formData.currentJobAbroad}
              onChange={(e) => updateFormData("currentJobAbroad", e.target.value)}
              placeholder="e.g., Nurse, Caregiver, Engineer"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Which country are you working in?</label>
            <input
              type="text"
              value={formData.workingCountry}
              onChange={(e) => updateFormData("workingCountry", e.target.value)}
              placeholder="e.g., Saudi Arabia, Singapore, USA"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Years of OFW Experience</label>
            <select
              value={formData.ofwYearsOfExperience}
              onChange={(e) => updateFormData("ofwYearsOfExperience", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            >
              <option value="">Select years</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="More than 10 years">More than 10 years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Do you plan to return to the Philippines?</label>
            <select
              value={formData.planToReturnToPH}
              onChange={(e) => updateFormData("planToReturnToPH", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            >
              <option value="">Select option</option>
              <option value="Yes, within 6 months">Yes, within 6 months</option>
              <option value="Yes, within 1 year">Yes, within 1 year</option>
              <option value="Yes, within 2-3 years">Yes, within 2-3 years</option>
              <option value="No, staying abroad">No, staying abroad</option>
              <option value="Undecided">Undecided</option>
            </select>
          </div>
        </>
      )}

      {/* Skilled Worker specific questions */}
      {formData.currentOccupation === "Skilled Worker" && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Current Trade/Skill</label>
            <input
              type="text"
              value={formData.currentTrade}
              onChange={(e) => updateFormData("currentTrade", e.target.value)}
              placeholder="e.g., Electrician, Plumber, Mechanic, Chef"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Years of Experience in This Trade</label>
            <select
              value={formData.tradeYearsOfExperience}
              onChange={(e) => updateFormData("tradeYearsOfExperience", e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            >
              <option value="">Select years</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="More than 10 years">More than 10 years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Certifications/Licenses (if any)</label>
            <input
              type="text"
              value={formData.certifications}
              onChange={(e) => updateFormData("certifications", e.target.value)}
              placeholder="e.g., TESDA NC II, PRC License"
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
            />
          </div>
        </>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Education Level</label>
        <select
          value={formData.educationLevel}
          onChange={(e) => updateFormData("educationLevel", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        >
          <option value="">Select education level</option>
          <option value="High School">High School</option>
          <option value="Vocational/Technical">Vocational/Technical</option>
          <option value="College Undergraduate">College Undergraduate</option>
          <option value="College Graduate">College Graduate</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Doctorate Degree">Doctorate Degree</option>
        </select>
      </div>

      {formData.currentOccupation === "Student" && (
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Year Level</label>
          <select
            value={formData.yearLevel}
            onChange={(e) => updateFormData("yearLevel", e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
          >
            <option value="">Select year level</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="5th Year">5th Year</option>
            <option value="Graduate Student">Graduate Student</option>
          </select>
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Course / Degree Program</label>
        <input
          type="text"
          value={formData.course}
          onChange={(e) => updateFormData("course", e.target.value)}
          placeholder="BS Chemistry"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">School / University</label>
        <input
          type="text"
          value={formData.school}
          onChange={(e) => updateFormData("school", e.target.value)}
          placeholder="University of the Philippines"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Expected Graduation Year</label>
        <input
          type="text"
          value={formData.expectedGraduation}
          onChange={(e) => updateFormData("expectedGraduation", e.target.value)}
          placeholder="2026"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Employment Status</label>
        <select
          value={formData.employmentStatus}
          onChange={(e) => updateFormData("employmentStatus", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        >
          <option value="">Select employment status</option>
          <option value="Not Working">Not Working</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
    </div>
  );
}

// Step 3: Purpose
function Step3({ formData, updateFormData, toggleArrayField }: any) {
  const reasonsOptions = [
    "Explore career options",
    "Upskill / Reskill",
    "Find a job",
    "Transition to a new career",
    "Find an internship",
    "Grow in my current career",
    "Prepare for graduation",
    "Build my professional portfolio"
  ];

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">What Brings You To MPath?</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Tell us what you're trying to achieve so we can guide you effectively.</p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Select all that apply</label>
        <div className="space-y-2">
          {reasonsOptions.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 cursor-pointer transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750"
            >
              <input
                type="checkbox"
                checked={formData.reasons.includes(reason)}
                onChange={() => toggleArrayField("reasons", reason)}
                className="h-5 w-5 rounded border-slate-300 text-[#0B5D4E] focus:ring-[#0B5D4E] dark:border-slate-600 dark:bg-slate-700"
              />
              <span className="text-sm text-slate-700 dark:text-slate-200">{reason}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Anything else you'd like us to know?</label>
        <textarea
          value={formData.additionalGoals}
          onChange={(e) => updateFormData("additionalGoals", e.target.value)}
          placeholder="Share any specific goals, interests, or concerns."
          rows={4}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>
    </div>
  );
}

// Step 4: Career Goal
function Step4({ formData, updateFormData, toggleArrayField }: any) {
  const skillsOptions = [
    "Financial Analysis",
    "Excel",
    "SQL",
    "Data Analytics",
    "Forecasting",
    "Business Communication",
    "Investment Analysis",
    "Financial Modeling",
    "Python",
    "PowerBI",
    "Tableau",
    "Risk Management"
  ];

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">Let's Define Your Goal</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Choose the career path you want to work toward.</p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Career Goal</label>
        <input
          type="text"
          value={formData.careerGoal}
          onChange={(e) => updateFormData("careerGoal", e.target.value)}
          placeholder="e.g., Financial Analyst, Software Engineer, UX Designer"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Industry</label>
        <input
          type="text"
          value={formData.industry}
          onChange={(e) => updateFormData("industry", e.target.value)}
          placeholder="e.g., Technology, Finance, Healthcare"
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Target Timeline</label>
        <select
          value={formData.targetTimeline}
          onChange={(e) => updateFormData("targetTimeline", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        >
          <option value="">Select timeline</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3+ Years">3+ Years</option>
        </select>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Target Skills (Select all that apply)</label>
        <div className="grid grid-cols-2 gap-2">
          {skillsOptions.map((skill) => (
            <label
              key={skill}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 cursor-pointer transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750"
            >
              <input
                type="checkbox"
                checked={formData.targetSkills.includes(skill)}
                onChange={() => toggleArrayField("targetSkills", skill)}
                className="h-4 w-4 rounded border-slate-300 text-[#0B5D4E] focus:ring-[#0B5D4E] dark:border-slate-600 dark:bg-slate-700"
              />
              <span className="text-sm text-slate-700 dark:text-slate-200">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Tell us your story</label>
        <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">Share where you are now, where you want to go, and why this career matters to you.</p>
        <textarea
          value={formData.careerStory}
          onChange={(e) => updateFormData("careerStory", e.target.value)}
          placeholder="I'm currently a 3rd year student..."
          rows={5}
          className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 outline-none ring-0 transition focus:border-[#0B5D4E] focus:ring-2 focus:ring-[#0B5D4E]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-[#7EE7D5] dark:focus:ring-[#7EE7D5]/20"
        />
      </div>
    </div>
  );
}

// Step 5: Learning Preferences
function Step5({ formData, toggleArrayField }: any) {
  const learningFormatsOptions = [
    "Courses",
    "Articles",
    "Projects",
    "Videos",
    "Webinars",
    "Podcasts",
    "Mentorship Sessions"
  ];

  const recommendationInterestsOptions = [
    "Courses & Learning Paths",
    "Internships",
    "Jobs",
    "Projects & Challenges",
    "Competitions",
    "Scholarships",
    "Mentorship Opportunities",
    "Industry Events"
  ];

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">How Can We Support You Best?</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Tell us how you prefer to learn and what opportunities interest you.</p>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Preferred Learning Formats</label>
        <div className="grid grid-cols-2 gap-2">
          {learningFormatsOptions.map((format) => (
            <label
              key={format}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 cursor-pointer transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750"
            >
              <input
                type="checkbox"
                checked={formData.learningFormats.includes(format)}
                onChange={() => toggleArrayField("learningFormats", format)}
                className="h-4 w-4 rounded border-slate-300 text-[#0B5D4E] focus:ring-[#0B5D4E] dark:border-slate-600 dark:bg-slate-700"
              />
              <span className="text-sm text-slate-700 dark:text-slate-200">{format}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">Recommendation Interests</label>
        <div className="grid grid-cols-2 gap-2">
          {recommendationInterestsOptions.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 cursor-pointer transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750"
            >
              <input
                type="checkbox"
                checked={formData.recommendationInterests.includes(interest)}
                onChange={() => toggleArrayField("recommendationInterests", interest)}
                className="h-4 w-4 rounded border-slate-300 text-[#0B5D4E] focus:ring-[#0B5D4E] dark:border-slate-600 dark:bg-slate-700"
              />
              <span className="text-sm text-slate-700 dark:text-slate-200">{interest}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

// Step 6: Review & Confirm
function Step6({ formData, handleSubmit }: any) {
  const calculateAge = (dob: string) => {
    if (!dob) return "N/A";
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const generateAISummary = () => {
    const occupation = formData.currentOccupation || "individual";
    const yearLevel = formData.yearLevel ? `${formData.yearLevel} ` : "";
    const course = formData.course || "your program";
    const career = formData.careerGoal || "your target career";
    const skills = formData.targetSkills.length > 0 
      ? formData.targetSkills.slice(0, 3).join(", ") 
      : "key skills";
    
    // Build contextual intro based on occupation
    let intro = "";
    
    if (occupation === "Career Shifter" && formData.previousCareer) {
      intro = `You are currently transitioning from ${formData.previousCareer} with ${formData.yearsOfExperience || "experience"} in that field, now pursuing a career in ${career}.`;
    } else if (occupation === "OFW (Overseas Filipino Worker)" && formData.currentJobAbroad) {
      const returnPlan = formData.planToReturnToPH 
        ? ` and planning to return to the Philippines ${formData.planToReturnToPH.toLowerCase()}`
        : "";
      intro = `You are currently working as ${formData.currentJobAbroad} in ${formData.workingCountry || "abroad"}${returnPlan}, interested in transitioning into ${career}.`;
    } else if (occupation === "Skilled Worker" && formData.currentTrade) {
      const certs = formData.certifications ? ` with certifications in ${formData.certifications}` : "";
      intro = `You are currently working as a ${formData.currentTrade} with ${formData.tradeYearsOfExperience || "experience"}${certs}, interested in transitioning into ${career}.`;
    } else {
      intro = `You are currently a ${yearLevel}${course} ${occupation.toLowerCase()} interested in transitioning into ${career}.`;
    }
    
    return `${intro} Based on your background and selected skills, we will create a personalized roadmap focused on ${skills}${formData.targetSkills.length > 3 ? ', and more' : ''}. Recommended opportunities will include internships, projects, and relevant certifications to help you achieve your goals within ${formData.targetTimeline || "your desired timeline"}.`;
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B5D4E] dark:text-[#7EE7D5]">Review Your Career Profile</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Please review your information before generating your personalized roadmap.</p>
      </div>

      <div className="space-y-3">
        {/* Card 1: Personal Information */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Personal Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Name:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.fullName || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Age:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{calculateAge(formData.dateOfBirth)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Gender:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.gender || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Location:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.city}, {formData.country}</span>
            </div>
          </div>
        </div>

        {/* Card 2: Education & Background */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Education & Background</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Occupation:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.currentOccupation || "N/A"}</span>
            </div>
            
            {/* Career Shifter specific fields */}
            {formData.currentOccupation === "Career Shifter" && (
              <>
                {formData.previousCareer && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Previous Career:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.previousCareer}</span>
                  </div>
                )}
                {formData.yearsOfExperience && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Years of Experience:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.yearsOfExperience}</span>
                  </div>
                )}
                {formData.reasonForShift && (
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">Reason for Career Shift:</span>
                    <span className="mt-1 font-medium text-slate-900 dark:text-slate-100">{formData.reasonForShift}</span>
                  </div>
                )}
              </>
            )}

            {/* OFW specific fields */}
            {formData.currentOccupation === "OFW (Overseas Filipino Worker)" && (
              <>
                {formData.currentJobAbroad && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Job Abroad:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.currentJobAbroad}</span>
                  </div>
                )}
                {formData.workingCountry && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Working Country:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.workingCountry}</span>
                  </div>
                )}
                {formData.ofwYearsOfExperience && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">OFW Experience:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.ofwYearsOfExperience}</span>
                  </div>
                )}
                {formData.planToReturnToPH && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Return to PH:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.planToReturnToPH}</span>
                  </div>
                )}
              </>
            )}

            {/* Skilled Worker specific fields */}
            {formData.currentOccupation === "Skilled Worker" && (
              <>
                {formData.currentTrade && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Trade/Skill:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.currentTrade}</span>
                  </div>
                )}
                {formData.tradeYearsOfExperience && (
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Years of Experience:</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{formData.tradeYearsOfExperience}</span>
                  </div>
                )}
                {formData.certifications && (
                  <div className="flex flex-col">
                    <span className="text-slate-600 dark:text-slate-400">Certifications:</span>
                    <span className="mt-1 font-medium text-slate-900 dark:text-slate-100">{formData.certifications}</span>
                  </div>
                )}
              </>
            )}

            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Education Level:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.educationLevel || "N/A"}</span>
            </div>
            {formData.yearLevel && (
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Year Level:</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">{formData.yearLevel}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Course:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.course || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">University:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.school || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Graduation Year:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.expectedGraduation || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Employment Status:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.employmentStatus || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Card 3: Career Goal */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Career Goal</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Target Career:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.careerGoal || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Industry:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.industry || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Timeline:</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">{formData.targetTimeline || "N/A"}</span>
            </div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">Selected Skills:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.targetSkills.length > 0 ? (
                  formData.targetSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#0B5D4E]/10 px-3 py-1 text-xs font-medium text-[#0B5D4E] dark:bg-[#7EE7D5]/20 dark:text-[#7EE7D5]"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">None selected</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Learning Preferences */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">Learning Preferences</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-slate-600 dark:text-slate-400">Preferred Learning Methods:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.learningFormats.length > 0 ? (
                  formData.learningFormats.map((format: string) => (
                    <span
                      key={format}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {format}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">None selected</span>
                )}
              </div>
            </div>
            <div>
              <span className="text-slate-600 dark:text-slate-400">Recommendation Interests:</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.recommendationInterests.length > 0 ? (
                  formData.recommendationInterests.map((interest: string) => (
                    <span
                      key={interest}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {interest}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">None selected</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: AI Career Summary */}
        <div className="rounded-2xl border-2 border-[#0B5D4E] bg-gradient-to-br from-[#0B5D4E]/5 to-[#0B5D4E]/10 p-4 dark:border-[#7EE7D5] dark:from-[#7EE7D5]/5 dark:to-[#7EE7D5]/10">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5 text-[#0B5D4E] dark:text-[#7EE7D5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-sm font-semibold text-[#0B5D4E] dark:text-[#7EE7D5]">AI Career Summary</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {generateAISummary()}
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <button
        onClick={handleSubmit}
        className="w-full rounded-2xl bg-[#0B5D4E] px-5 py-4 text-base font-semibold text-white transition hover:bg-[#09493f] dark:bg-[#7EE7D5] dark:text-slate-900 dark:hover:bg-[#6dd4c1]"
      >
        Generate My Career Roadmap
      </button>
    </div>
  );
}
