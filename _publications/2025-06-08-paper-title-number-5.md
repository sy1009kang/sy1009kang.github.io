---
title: "OFERA: Blendshape-driven 3D Gaussian Control for Occluded Facial Expression to Realistic Avatars in VR"
collection: publications
category: Journal
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'We propose OFERA, a novel framework for real-time expression control of photorealistic Gaussian head avatars for VR headset users.'
date: 2026-03-20
venue: 'IEEE Transactions on Visualization and Computer Graphics 2026'
presentation: IEEE VR 2026
paperurl: 'https://arxiv.org/abs/2602.01748'
citation: 'arXiv:2602.01748'
---

We propose OFERA, a novel framework for real-time expression control of photorealistic Gaussian head avatars for VR headset users. Existing approaches attempt to recover occluded facial expressions using additional sensors or internal cameras, but sensor-based methods increase device weight and discomfort, while camera-based methods raise privacy concerns and suffer from limited access to raw data. To overcome these limitations, we leverage the blendshape signals provided by commercial VR headsets as expression inputs. Our framework consists of three key components: (1) Blendshape Distribution Alignment (BDA), which applies linear regression to align the headset-provided blendshape distribution to a canonical input space; (2) an Expression Parameter Mapper (EPM) that maps the aligned blendshape signals into an expression parameter space for controlling Gaussian head avatars; and (3) a Mapper-integrated Avatar (MiA) that incorporates EPM into the avatar learning process to ensure distributional consistency. Furthermore, OFERA establishes an end-to-end pipeline that senses and maps expressions, updates Gaussian avatars, and renders them in real-time within VR environments. We show that EPM outperforms existing mapping methods on quantitative metrics, and we demonstrate through a user study that the full OFERA framework enhances expression fidelity while preserving avatar realism. By enabling real-time and photorealistic avatar expression control, OFERA significantly improves telepresence in VR communication.
