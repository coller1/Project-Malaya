# Portfolio Components

A comprehensive collection of components for the user portfolio page, showcasing learning progress, achievements, and career readiness.

## Components Overview

### 1. **Learning Statistics** (`learning-statistics.tsx`)
- **Features:**
  - 4 circular progress bars with animations
  - Tracks: Courses Completed, Skills Mastered, Hours Learned, Projects Built
  - Smooth animation on mount (1000ms duration)
  - Color-coded metrics (green, blue, purple, amber)
  - Responsive grid layout (2 cols mobile, 4 cols desktop)

### 2. **Activity Chart** (`activity-chart.tsx`)
- **Features:**
  - Animated bar graph showing weekly activity
  - 7-day view with individual bars for each day
  - Smooth height animation (1000ms duration)
  - Color coding for weekdays vs weekends
  - Summary statistics (total minutes, daily average)

### 3. **Career Readiness Score** (`career-readiness-score.tsx`)
- **Features:**
  - Large circular progress indicator with gradient stroke
  - Overall career readiness percentage (78%)
  - 4 category breakdowns with individual progress bars
  - Status icons (complete, in progress, pending)
  - Color-coded scores (green: 80+, blue: 60-79, amber: <60)
  - Actionable "Next Steps" suggestions

### 4. **Career Insights** (`career-insights.tsx`)
- **Features:**
  - AI-powered personalized recommendations
  - 3 insight cards with icons and color themes
  - Growth trajectory analysis
  - Skill demand information
  - Career path suggestions
  - Hover effects for interactivity

### 5. **Accomplished Projects** (`accomplished-projects.tsx`)
- **Features:**
  - Grid layout of completed projects (3 columns on desktop)
  - Featured project badges with star icon
  - Technology stack badges
  - GitHub and live demo links
  - 6 sample projects included
  - Hover shadow effects

### 6. **Certificates** (`certificates.tsx`)
- **Features:**
  - List of earned certificates with details
  - Issuer, date, and credential ID display
  - Skill badges for each certificate
  - Download and verify links
  - Award icon with gradient background
  - 5 sample certificates

### 7. **Resume Builder** (`resume-builder.tsx`)
- **Features:**
  - Resume preview card with status badges
  - Section management (7 default sections)
  - ATS optimization indicator
  - Quick actions: Tailor for Job, Check ATS Score, Generate Cover Letter
  - Export options (PDF, LinkedIn)
  - Edit capabilities for each section

## Design Features

- **Animations:**
  - Circular progress bars animate on mount
  - Bar charts grow from bottom to top
  - Smooth transitions (1000-1500ms)
  - Hover effects on cards and buttons

- **Responsive Design:**
  - Mobile-first approach
  - Grid layouts adapt to screen size
  - Stacked sections on mobile, side-by-side on desktop

- **Dark Mode Support:**
  - All components support light/dark themes
  - Proper color contrast in both modes
  - Gradient backgrounds adjusted for dark mode

- **Accessibility:**
  - Semantic HTML structure
  - Proper heading hierarchy
  - Icon labels and descriptions
  - Keyboard navigation support (via Shadcn UI)

## Data Structure

All components currently use mock/sample data. To integrate with real data:

1. Create data fetching functions/hooks
2. Replace hardcoded arrays with API calls
3. Add loading states
4. Implement error handling

## Usage

```tsx
import {
  LearningStatistics,
  ActivityChart,
  CareerReadinessScore,
  CareerInsights,
  AccomplishedProjects,
  Certificates,
  ResumeBuilder,
} from "@/components/portfolio";

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <LearningStatistics />
      <ActivityChart />
      <div className="grid gap-6 lg:grid-cols-2">
        <CareerReadinessScore />
        <CareerInsights />
      </div>
      <AccomplishedProjects />
      <Certificates />
      <ResumeBuilder />
    </div>
  );
}
```

## Future Enhancements

- [ ] Connect to real user data via API
- [ ] Add export functionality for resume
- [ ] Implement certificate download
- [ ] Add project image uploads
- [ ] Create resume templates
- [ ] Add social sharing capabilities
- [ ] Implement print-friendly views
- [ ] Add data visualization filters
- [ ] Create comparison with peers
- [ ] Add goal-setting features
