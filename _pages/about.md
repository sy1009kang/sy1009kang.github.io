
---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="research-container">

<div class="research-intro">
  <p>
    I am a Ph.D. candidate at <strong>KAIST</strong> (Ubiquitous Virtual Reality Lab), specializing in
    <strong>avatar-mediated communication</strong> and <strong>empathic computing</strong> for AR/VR.
    My work investigates how people perceive and communicate through avatars, and how we can design
    expressive, trustworthy, and socially effective avatar behaviors—especially in <strong>asynchronous</strong>
    and mediated XR scenarios.
  </p>

  <p>
    <span class="pub-tag oral">XR / HCI</span>
    <span class="pub-tag oral">Avatars</span>
    <span class="pub-tag oral">Social Presence</span>
    <span class="pub-tag oral">Communication</span>
    <span class="pub-tag oral">Embodiment</span>
  </p>

  <p>
    {% if site.author.googlescholar %}
      <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a>
    {% endif %}
    {% if site.author.github %}
      · <a href="{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
    {% endif %}
    {% if site.author.email %}
      · <a href="mailto:{{ site.author.email }}">Email</a>
    {% endif %}
  </p>
</div>

<div class="section-header">
  <h2>🚀 Recent & Upcoming</h2>
</div>

<div class="pub-entry">
  <p class="pub-authors">
    <span class="pub-year">Dec 2025 – Apr 2026</span>
    Visiting Researcher at <strong>Georgia Institute of Technology</strong> (School of Interactive Computing),
    collaborating with <strong>Prof. Yalong Yang</strong>.
  </p>

  <p class="pub-authors">
    <span class="pub-year">Mar 2026</span>
    Presenting at <strong>IEEE VR 2026</strong>.
    Three papers (1 first-author, 2 co-author) will be published in <strong>IEEE TVCG</strong> and presented at the conference.
  </p>

  <p class="pub-authors">
    <span class="pub-year">May 2026</span>
    <strong>Ph.D. Defense</strong> (details for the public talk will be announced soon).
  </p>
</div>

<div class="section-header">
  <h2>🔍 Research Snapshot</h2>
</div>

<div class="pub-entry">
  <p class="pub-authors"><strong>Theme:</strong> Understanding and designing human communication in immersive XR.</p>

  <p class="pub-authors">
    My research lies at the intersection of <strong>human–computer interaction</strong>, <strong>immersive XR systems</strong>,
    and <strong>social computing</strong>. I study how people <em>perceive</em>, <em>interpret</em>, and <em>trust</em> digital
    representations of others, and how we can design avatar-mediated systems that support natural, meaningful, and socially appropriate
    communication beyond physical co-presence.
  </p>

  <p class="pub-authors">
    More broadly, I aim to develop interaction techniques and design guidance that enhance <strong>social presence</strong>,
    <strong>communication quality</strong>, and <strong>user agency</strong> in future XR platforms—grounded in user-centered
    experimentation and system building.
  </p>

  <ul class="subbullets">
    <li><strong>Avatar-mediated communication:</strong> embodiment, nonverbal cues, and social presence in VR/AR.</li>
    <li><strong>Human perception in XR:</strong> identity, agency, trust, and social connection with virtual representations.</li>
    <li><strong>Interaction design:</strong> creating expressive and reliable avatar behaviors that adapt to context and task needs.</li>
    <li><strong>Evaluation:</strong> rigorous user studies and mixed-method approaches to assess social and experiential outcomes.</li>
  </ul>
</div>

<div class="section-header">
  <h2>📌 Selected Links</h2>
</div>

<div class="pub-entry">
  <div class="pub-links">
    <a class="pub-link" href="{{ '/publications/' | relative_url }}">📄 Publications</a>
    <a class="pub-link" href="{{ '/cv/' | relative_url }}">🧾 CV</a>
    {% if site.author.googlescholar %}
      <a class="pub-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">🎓 Google Scholar</a>
    {% endif %}
  </div>
</div>

</div>
```
