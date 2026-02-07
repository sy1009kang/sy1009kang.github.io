---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
/* Modern CV Styles */
.cv-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Stats Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0 3rem 0;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 3rem 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #667eea;
}

.section-icon {
  font-size: 1.5rem;
}

.section-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
  margin: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 0.25rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #667eea;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #667eea;
}

.timeline-item.current::before {
  background: #48bb78;
  box-shadow: 0 0 0 2px #48bb78, 0 0 0 4px rgba(72, 187, 120, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 2px #48bb78, 0 0 0 4px rgba(72, 187, 120, 0.2);
  }
  50% {
    box-shadow: 0 0 0 2px #48bb78, 0 0 0 8px rgba(72, 187, 120, 0.1);
  }
}

/* Cards */
.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  transform: translateX(4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.card-subtitle {
  font-size: 0.95rem;
  color: #4a5568;
  margin: 0.25rem 0;
}

.card-meta {
  font-size: 0.85rem;
  color: #718096;
  margin: 0.25rem 0;
}

.date-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #edf2f7;
  color: #4a5568;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.current-badge {
  background: #c6f6d5;
  color: #22543d;
}

/* Progress Bar */
.progress-container {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.progress-label {
  font-weight: 600;
  color: #2d3748;
}

.progress-percentage {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
}

.progress-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 1s ease;
}

/* Location Tags */
.location-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #4a5568;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}

/* Funding Badge */
.funding-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #fef5e7;
  color: #975a16;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
}

/* List Styles */
.detail-list {
  margin: 0.75rem 0 0 1.25rem;
  padding: 0;
  list-style: none;
}

.detail-list li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
}

.detail-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
}
</style>

<div class="cv-container">

<!-- Stats Overview -->
<div class="stats-grid">
  <div class="stat-card">
    <span class="stat-number">6+</span>
    <span class="stat-label">Years Research</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">4</span>
    <span class="stat-label">Countries Visited</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">2</span>
    <span class="stat-label">Active Projects</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">ISO</span>
    <span class="stat-label">Standards Expert</span>
  </div>
</div>

<!-- PhD Progress -->
<div class="progress-container">
  <div class="progress-header">
    <span class="progress-label">🎓 Ph.D. Progress (2022–2026)</span>
    <span class="progress-percentage">75%</span>
  </div>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 75%;"></div>
  </div>
</div>

<!-- Education Section -->
<div class="section-header">
  <span class="section-icon">🎓</span>
  <h2>Education</h2>
</div>

<div class="timeline">
  <div class="timeline-item current">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Ph.D. in Culture Technology</h3>
          <p class="card-subtitle">Korea Advanced Institute of Science and Technology (KAIST)</p>
          <p class="card-meta">Ubiquitous Virtual Reality (UVR) Lab · Advisor: Prof. Woontack Woo</p>
        </div>
        <span class="date-badge current-badge">Aug 2022 – Present</span>
      </div>
      <div class="location-tag">📍 Daejeon, Korea</div>
      <div class="location-tag">🎯 Expected: Aug 2026</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">M.S. in Culture Technology</h3>
          <p class="card-subtitle">Korea Advanced Institute of Science and Technology (KAIST)</p>
          <p class="card-meta">Ubiquitous Virtual Reality (UVR) Lab · Advisor: Prof. Woontack Woo</p>
        </div>
        <span class="date-badge">Sep 2020 – Aug 2022</span>
      </div>
      <div class="location-tag">📍 Daejeon, Korea</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">B.S. in Media & Communication</h3>
          <p class="card-subtitle">Chung-Ang University</p>
          <p class="card-meta">Graduated Cum Laude</p>
        </div>
        <span class="date-badge">Mar 2015 – Aug 2020</span>
      </div>
      <div class="location-tag">📍 Seoul, Korea</div>
    </div>
  </div>
</div>

<!-- Work Experience Section -->
<div class="section-header">
  <span class="section-icon">💼</span>
  <h2>Work Experience</h2>
</div>

<div class="timeline">
  <div class="timeline-item current">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Visiting Researcher</h3>
          <p class="card-subtitle">Georgia Institute of Technology</p>
          <p class="card-meta">School of Interactive Computing · Advisor: Prof. Yalong Yang</p>
        </div>
        <span class="date-badge current-badge">Dec 2025 – Apr 2026</span>
      </div>
      <div class="location-tag">📍 Atlanta, USA</div>
      <div class="funding-badge">💰 BK21, National Research Foundation of Korea (NRF)</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Visiting Researcher</h3>
          <p class="card-subtitle">University of Calgary</p>
          <p class="card-meta">Department of Electrical and Software Engineering · Advisor: Prof. Kangsoo Kim</p>
        </div>
        <span class="date-badge">Aug 2025 – Nov 2025</span>
      </div>
      <div class="location-tag">📍 Calgary, Canada</div>
      <div class="funding-badge">💰 NSERC Alliance – Alberta Innovates Advance Program</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Visiting Researcher</h3>
          <p class="card-subtitle">University of Calgary</p>
          <p class="card-meta">Department of Electrical and Software Engineering · Advisor: Prof. Kangsoo Kim</p>
        </div>
        <span class="date-badge">Aug 2023 – Feb 2024</span>
      </div>
      <div class="location-tag">📍 Calgary, Canada</div>
      <div class="funding-badge">💰 NRF, Mitacs Globalink Research Award</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Visiting Researcher</h3>
          <p class="card-subtitle">University of Southern California</p>
          <p class="card-meta">Institute for Creative Technologies · Advisor: Prof. Jonathan Gratch</p>
        </div>
        <span class="date-badge">Dec 2021 – Feb 2022</span>
      </div>
      <div class="location-tag">📍 Los Angeles, USA</div>
      <div class="funding-badge">💰 BK21, NRF</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Research Intern</h3>
          <p class="card-subtitle">Seoul National University</p>
          <p class="card-meta">User Experience Lab</p>
        </div>
        <span class="date-badge">Mar 2020 – Apr 2020</span>
      </div>
      <div class="location-tag">📍 Seoul, Korea</div>
    </div>
  </div>
</div>

<!-- Projects Section -->
<div class="section-header">
  <span class="section-icon">🔬</span>
  <h2>Projects</h2>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">OpenXR: Development of an Open XR Platform for Highly Immersive Collaboration</h3>
      <p class="card-subtitle">KAIST, KISTI, KICT</p>
    </div>
    <span class="date-badge current-badge">Dec 2021 – Present</span>
  </div>
  <div class="funding-badge">💰 National Research Council of Science and Technology (NST)</div>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">TranSpace: Human Reconstruction for Highly Realistic Virtual Interaction</h3>
      <p class="card-subtitle">KAIST</p>
    </div>
    <span class="date-badge">Sep 2020 – Nov 2021</span>
  </div>
  <div class="funding-badge">💰 National Research Council of Science and Technology (NST)</div>
</div>

<!-- Service and Leadership Section -->
<div class="section-header">
  <span class="section-icon">🌟</span>
  <h2>Service & Leadership</h2>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">Student Volunteer Chair</h3>
      <p class="card-subtitle">IEEE International Symposium on Mixed and Augmented Reality (ISMAR 2025)</p>
    </div>
    <span class="date-badge current-badge">2025</span>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">Student Volunteer</h3>
      <p class="card-subtitle">IEEE International Symposium on Mixed and Augmented Reality (ISMAR 2024)</p>
    </div>
    <span class="date-badge">2024</span>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">Student Volunteer</h3>
      <p class="card-subtitle">IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR 2024)</p>
    </div>
    <span class="date-badge">2024</span>
  </div>
</div>

<div class="card">
  <div class="card-header">
    <div>
      <h3 class="card-title">Young Standardization Expert</h3>
      <p class="card-subtitle">Telecommunications Technology Association (TTA), Korea</p>
    </div>
    <span class="date-badge current-badge">Jun 2023 – Present</span>
  </div>
  <ul class="detail-list">
    <li>Contributing member of ISO/IEC JTC 1/SC 24 WG 9 (Augmented and Virtual Reality)</li>
    <li>Presenter and contributor at ISO/IEC JTC 1/SC 24 plenary and working group meetings</li>
    <li>Meetings: Sydney 2023, Paris 2024, Alexandria 2025</li>
  </ul>
</div>

</div>
