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
.about-section { margin-top: 1.75rem; }
.about-section h2 { margin-bottom: .75rem; padding-bottom: .35rem; border-bottom: 1px solid #eee; }

.intro-block {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: #333;
}

.intro-block p {
  margin-bottom: 1rem;
}

.intro-block strong {
  font-weight: 600;
}

.tags {
  margin: 1rem 0;
}

.tag { 
  display: inline-block; 
  padding: .25rem .6rem; 
  background: #f5f5f5;
  color: #555;
  border-radius: 3px; 
  font-size: .85em; 
  margin-right: .5rem;
  margin-bottom: .5rem;
}

.links {
  margin: 1rem 0;
}

.links a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #333;
  margin-right: 1rem;
}

.links a:hover {
  border-bottom: 2px solid #333;
}

.news-item {
  margin: .8rem 0;
  padding-bottom: .8rem;
  border-bottom: 1px solid #f5f5f5;
}

.news-item:last-child {
  border-bottom: none;
}

.news-date {
  display: inline-block;
  padding: .15rem .5rem;
  background: #f5f5f5;
  color: #666;
  border-radius: 3px;
  font-size: .85em;
  margin-right: .5rem;
  font-weight: 600;
}

.news-text {
  color: #555;
  line-height: 1.6;
}

.research-points {
  margin: 1rem 0 1rem 1.5rem;
}

.research-points li {
  margin-bottom: .5rem;
  color: #555;
  line-height: 1.6;
}

.quick-links {
  margin-top: 1rem;
}

.quick-link {
  display: inline-block;
  margin-right: .6rem;
  margin-bottom: .5rem;
  padding: .35rem .8rem;
  background: #f5f5f5;
  color: #333;
  text-decoration: none;
  border-radius: 3px;
  font-size: .9em;
}

.quick-link:hover {
  background: #e5e5e5;
}
</style>

<!-- Introduction -->
<div class="intro-block">
  <p>
    I am a Ph.D. candidate at <strong>KAIST</strong> Ubiquitous Virtual Reality Lab, specializing in <strong>avatar-mediated communication</strong> and <strong>empathic computing</strong> for AR/VR. My work investigates how people perceive and communicate through avatars, and how we can design socially effective avatar behaviors—especially in <strong>asynchronous</strong> and mediated XR scenarios.
  </p>

  <div class="tags">
    <span class="tag">XR / HCI</span>
    <span class="tag">Avatars</span>
    <span class="tag">Social Presence</span>
    <span class="tag">Communication</span>
    <span class="tag">Embodiment</span>
  </div>
</div>

<!-- Recent & Upcoming -->
<div class="about-section">
  <h2>🚀 Recent & Upcoming News</h2>

  <div class="news-text">
    📍 <strong>Visiting Researcher @ Georgia Institute of Technology</strong><br>
    School of Interactive Computing · Collaborating with <strong>Prof. Yalong Yang</strong><br>
    <span class="news-date">Dec 2025 – Apr 2026</span>
  </div>

  <div class="news-text">
    🎤 <strong>IEEE VR 2026 Presentation</strong><br>
    Three papers (1 first-author, 2 co-author) will be published in <strong>IEEE TVCG</strong>
    and presented at the conference.
  </div>

  <div class="news-text">
    🎓 <strong>Ph.D. Defense</strong><br>
    Public presentation details will be announced soon.
  </div>
</div>


<!-- Research Snapshot -->
<div class="about-section">
  <h2>🔍 Research Snapshot</h2>
  
  <div class="intro-block">
    <p><strong>Theme:</strong> Understanding and designing human communication in immersive XR.</p>

    <p>
      My research lies at the intersection of <strong>human–computer interaction</strong>, <strong>immersive XR systems</strong>,
      and <strong>social computing</strong>. I study how people <em>perceive</em>, <em>interpret</em>, and <em>trust</em> digital
      representations of others, and how we can design avatar-mediated systems that support natural, meaningful, and socially appropriate
      communication beyond physical co-presence.
    </p>

    <p>
      More broadly, I aim to develop interaction techniques and design guidelines that enhance <strong>social presence</strong>,
      <strong>communication quality</strong>, and <strong>user agency</strong> in future XR platforms—grounded in user-centered
      experimentation and system building.
    </p>

<ul class="research-points">
  <li>
    <strong>Avatar-mediated communication:</strong>
    investigating how avatars convey nonverbal cues such as facial expressions, gaze, and timing,
    and how these cues shape social presence, rapport, and communication quality in XR environments.
  </li>
  <li>
    <strong>Human perception in XR:</strong>
    examining how users perceive identity, agency, and social connection when interacting with
    virtual representations of themselves and others, including issues of trust and self-identification.
  </li>
  <li>
    <strong>Interaction design:</strong>
    designing and evaluating interaction techniques that enable expressive, reliable, and
    context-aware avatar behaviors across different tasks and communication scenarios.
  </li>
  <li>
    <strong>Evaluation:</strong>
    conducting rigorous user studies using mixed-method approaches—combining quantitative metrics
    with qualitative insights—to assess social, behavioral, and experiential outcomes in XR systems.
  </li>
</ul>


<!-- Selected Links -->
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
