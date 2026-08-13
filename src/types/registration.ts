export interface RegistrationData {
  // Step 1: About You
  fullName: string;
  dateOfBirth: string;
  gender: string;
  country: string;
  city: string;

  // Step 2: Background
  currentOccupation: string;
  educationLevel: string;
  yearLevel?: string;
  course: string;
  school: string;
  expectedGraduation: string;
  employmentStatus: string;
  
  // Career Shifter specific
  previousCareer?: string;
  yearsOfExperience?: string;
  reasonForShift?: string;
  
  // OFW specific
  currentJobAbroad?: string;
  workingCountry?: string;
  ofwYearsOfExperience?: string;
  planToReturnToPH?: string;
  returnTimeline?: string;
  
  // Skilled Worker specific
  currentTrade?: string;
  tradeYearsOfExperience?: string;
  certifications?: string;

  // Step 3: Purpose
  reasons: string[];
  additionalGoals: string;

  // Step 4: Career Goal
  careerGoal: string;
  industry: string;
  targetTimeline: string;
  targetSkills: string[];
  careerStory: string;

  // Step 5: Learning Preferences
  learningFormats: string[];
  recommendationInterests: string[];
}
