---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<style>
.about-section { margin-top: 2.5rem; }
.about-section h2 { 
  margin-bottom: 1.2rem; 
  padding-bottom: .5rem; 
  border-bottom: 2px solid #333; 
  font-size: 1.5rem;
}

.intro-block {
  margin-bottom: 1.5rem;
  line-height: 1.75;
  color: #333;
}

.tags { margin: 1.2rem 0; }
.tag { 
  display: inline-block; 
  padding: .3rem .7rem; 
  background: #f0f0f0;
  color: #444;
  border-radius: 4px; 
  font-size: .85em; 
  margin-right: .5rem;
  margin-bottom: .5rem;
  font-weight: 500;
}

/* News Section Styling 개선 */
.news-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.news-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background: #fcfcfc;
  border-left: 4px solid #333;
  border-radius: 0 6px 6px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.news-content {
  flex: 1;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.news-title {
  font-weight: 700;
  color: #222;
  font-size: 1.05rem;
}

.news-date {
  display: inline-block;
  padding: .2rem .6rem;
  background: #eee;
  color: #666;
  border-radius: 4px;
  font-size: .8em;
  font-weight: 600;
  white-space: nowrap;
}

.news-desc {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}

.research-points {
  margin: 1.2rem 0 1.2rem 1.5rem;
  list-style-type: none;
  padding-left: 0;
}

.research-points li {
  margin-bottom: 0.8rem;
  color: #444;
  line-height: 1.6;
  position: relative;
  padding-left: 1.2rem;
}

.research-points li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #333;
  font-weight: bold;
}

.quick-links {
  margin-top: 1.2rem;
}

.quick-link {
  display: inline-block;
  margin-right: .8rem;
  margin-bottom: .5rem;
  padding: .5rem 1rem;
  background: #333;
  color: #fff !important;
  text-decoration: none;
  border-radius: 5px;
  font-size: .9em;
  transition: background 0.2s ease;
}

.quick-link:hover {
  background: #555;
  text-decoration: none;
}
</style>

<div class="intro-block">
  <p>
    My research explores <strong>Human–Agent Interaction in XR</strong>, with a focus on a future in which people create AI agents that represent them and communicate on their behalf in immersive environments. I develop communication frameworks for these human-representative agents, particularly for mediated and asynchronous interactions in which users may not be physically present or available in real time. Ultimately, I aim to advance communication technologies that are more personalized, accessible, and socially effective while ensuring that users retain agency over, and trust in, how they are represented.
  </p>

  <div class="tags">
    <span class="tag">Human–Agent Interaction</span>
    <span class="tag">XR</span>
    <span class="tag">Avatars &amp; Agents</span>
    <span class="tag">Social Communication</span>
    <span class="tag">Human Agency</span>
  </div>
</div>

<div class="about-section">
  <h2>🚀 Recent & Upcoming News</h2>

  <div class="news-container">
    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">🏫 Postdoctoral Associate @ University of Georgia</span>
          <span class="news-date">Starting Sep 2026</span>
        </div>
        <div class="news-desc">
          I will begin a new position as a <strong>Postdoctoral Associate</strong> at the University of Georgia in September 2026.
        </div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">🎓 Ph.D. Graduation from KAIST</span>
          <span class="news-date">Aug 2026</span>
        </div>
        <div class="news-desc">
          Received a Ph.D. in Culture Technology from <strong>KAIST</strong>.
        </div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">📍 Visiting Researcher @ Georgia Tech</span>
          <span class="news-date">Dec 2025 – Apr 2026</span>
        </div>
        <div class="news-desc">
          Conducted research in the School of Interactive Computing in collaboration with <strong>Prof. Yalong Yang</strong>.
        </div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">🎤 Three TVCG Papers @ IEEE VR 2026</span>
          <span class="news-date">Mar 2026</span>
        </div>
        <div class="news-desc">
          Three papers (one first-author and two co-authored) were published in <strong>IEEE Transactions on Visualization and Computer Graphics</strong> and presented at IEEE VR 2026 in Daegu, Korea.
        </div>
      </div>
    </div>

  </div>
</div>

<div class="about-section">
  <h2>🔍 Research Snapshot</h2>
  
  <div class="intro-block">
    <p><strong>Theme:</strong> Designing human-centered communication between people and their representative agents in XR.</p>

    <p>
      My research lies at the intersection of <strong>human–computer interaction</strong>, <strong>XR</strong>, and <strong>social AI</strong>. I investigate how human-representative agents can convey their users’ identities, intentions, emotions, and communication styles while adapting to diverse social contexts.
    </p>

    <ul class="research-points">
      <li>
        <strong>Human-representative agents:</strong> Exploring how avatars and AI agents can represent people and communicate on their behalf.
      </li>
      <li>
        <strong>Agent-mediated communication:</strong> Developing new frameworks for mediated and asynchronous interaction across time and space.
      </li>
      <li>
        <strong>Adaptive social behavior:</strong> Designing personalized and context-aware verbal and nonverbal agent behaviors.
      </li>
      <li>
        <strong>Human-centered evaluation:</strong> Examining social presence, identity, agency, authenticity, and trust through mixed-method user studies.
      </li>
    </ul>
  </div>
</div>

<div class="about-section">
  <h2>📌 Quick Links</h2>
  <div class="quick-links">
    <a class="quick-link" href="{{ '/publications/' | relative_url }}">Publications</a>
    <a class="quick-link" href="{{ '/cv/' | relative_url }}">CV</a>
    {% if site.author.googlescholar %}
      <a class="quick-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a>
    {% endif %}
  </div>
</div>
