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
    I am a Ph.D. candidate at <strong>KAIST</strong> Ubiquitous Virtual Reality Lab, specializing in <strong>avatar-mediated communication</strong> and <strong>empathic computing</strong> for AR/VR. My work investigates how people perceive and communicate through avatars, and how we can design socially effective avatar behaviors—especially in asynchronous and mediated XR scenarios.
  </p>

  <div class="tags">
    <span class="tag">XR / HCI</span>
    <span class="tag">Avatars</span>
    <span class="tag">Social Presence</span>
    <span class="tag">Communication</span>
    <span class="tag">Embodiment</span>
  </div>
</div>

<div class="about-section">
  <h2>🚀 Recent & Upcoming News</h2>

  <div class="news-container">
    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">📍 Visiting Researcher @ Georgia Tech</span>
          <span class="news-date">Dec 2025 – Apr 2026</span>
        </div>
        <div class="news-desc">
          School of Interactive Computing · Collaborating with <strong>Prof. Yalong Yang</strong>
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
          Three papers (1 first-author, 2 co-author) will be published in <strong>IEEE Transactions on Visualization and Computer Graphics</strong> and presented at IEEE VR 2026 in Daegu, Korea.
        </div>
      </div>
    </div>

    <div class="news-item">
      <div class="news-content">
        <div class="news-header">
          <span class="news-title">🎓 Ph.D. Defense</span>
          <span class="news-date">Coming Soon</span>
        </div>
        <div class="news-desc">
          Public presentation details and schedule will be announced soon.
        </div>
      </div>
    </div>
  </div>
</div>

<div class="about-section">
  <h2>🔍 Research Snapshot</h2>
  
  <div class="intro-block">
    <p><strong>Theme:</strong> Understanding and designing human communication in immersive XR.</p>

    <p>
      My research lies at the intersection of <strong>human–computer interaction</strong>, <strong>immersive XR systems</strong>, and <strong>empathic computing</strong>. I study how people <em>perceive</em>, <em>interpret</em>, and <em>trust</em> digital representations of others.
    </p>

    <ul class="research-points">
      <li>
        <strong>Avatar-mediated communication:</strong> Investigating nonverbal cues and their impact on communication and social presence.
      </li>
      <li>
        <strong>Human perception in XR:</strong> Examining identity, agency, and trust when interacting with virtual representations.
      </li>
      <li>
        <strong>Interaction design:</strong> Developing expressive and context-aware avatar behaviors for diverse communication tasks.
      </li>
      <li>
        <strong>Evaluation:</strong> Conducting mixed-method user studies to assess behavioral and experiential outcomes in XR.
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
