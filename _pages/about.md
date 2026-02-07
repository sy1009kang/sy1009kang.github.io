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
    <span class="pub-tag oral">Asynchronous Communication</span>
    <span class="pub-tag oral">LLM-mediated Behavior</span>
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
  <p class="pub-authors"><strong>Theme:</strong> Balancing identity consistency with communicative appropriateness in avatar behavior.</p>
  <p class="pub-authors">
    In real-world XR communication, users care about both <em>“Does this feel like me?”</em> and
    <em>“Does this behave appropriately in context?”</em> My research develops interaction paradigms and
    adaptive facial behavior generation techniques that preserve personal style while supporting socially effective communication.
  </p>

  <ul class="subbullets">
    <li><strong>Asynchronous self-avatars:</strong> modeling identity, agency, and adoption when users view their avatars from a third-person perspective.</li>
    <li><strong>Expressive facial animation:</strong> prioritizing critical blendshapes and communicative intent to improve social presence.</li>
    <li><strong>Evaluation:</strong> combining computational metrics and user perception measures (realism, plausibility, self-identification, trust, intention to use).</li>
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
