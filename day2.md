---
layout: default
title: "Day 2 – September 9, 2026: First Conference Day & My Talk"
---

[← Back to home](index.md)

## Morning

I had my breakfast at the hotel — one of the best breakfasts of my life! In front of the hotel, I met Jose M. Peña (whom I first met at UAI 2018 in California, USA) and Jirka Vomlel, and we walked together to the conference venue.

The conference was held at **IVAM – Institut Valencià d'Art Modern**, with fewer than 100 participants — a wonderfully intimate setting for a research community.

## Talks That Caught My Attention

### 1. Partial Identification under Causal Orders by Linear Programming
*Eric Rossetto, Alessandro Antonucci*

A nice summary of partial identification, presented chronologically. I will read this paper for sure after the proceedings come out.

### 2. Partially Ordering Graphical Models with Latent Confounders by their Equality Constraints
*Thijs van Ommen*

I read his recent work on causality and the information bottleneck several months ago. I had several discussions with him during the conference, which were inspiring and enlightening. In particular, his comment that maximal ancestral graphs (MAGs) are **not closed under the marginalization operation** surprised me. He provided a nice example for this; I will email him as a follow-up to learn more.

### 3. Differentiable Structural EM for Explicit-Latent Linear-Gaussian DAGs (my talk!)
*Mohammad Ali Javidian, R. Mitchell Parry*

I presented our work, with a nice Q&A at the end.

We bridge two largely separate lines of work on directed graphical models: classical **Structural EM**, which handles hidden variables and is commonly instantiated through search over discrete graph structures, and **continuous DAG learning** methods, which avoid combinatorial search through smooth optimization but are usually designed for fully observed data.

We combine these ideas for linear–Gaussian models with explicit hidden variables. Our proposed method treats the graph weights as parameters of a generative Gaussian model over both observed and hidden variables. This makes the E-step exact: instead of filling in hidden variables with point estimates, it computes the needed posterior first and second moments. The M-step then uses smooth sparsity and acyclicity penalties to guide the graph search, but accepts an update only when it does not decrease the unpenalized expected complete-data objective. This preserves the usual monotone improvement of EM while still benefiting from continuous DAG optimization. Experiments show that both ingredients are necessary: exact second-moment inference in the E-step and the unpenalized acceptance check in the M-step.

Several audience members showed interest in the talk, and I had several good conversations about it afterwards. Jirka got interested in extending the work to **ordinal data**, and we arranged to meet and work on this idea starting early October. Thank you, Jirka, for the kind suggestion!

### 4. Greetings for Marco

Jirka and Alessandro (who remembered me from FLAIRS 2019, when I presented one of my PhD papers and he chaired the session) both asked me to say hello to Marco — my PhD advisor — and asked about him.

## Photo Album

<div class="photo-album"
     data-folder="https://drive.google.com/drive/folders/1tHSGkCoKG5MDTeXQCsqA3OJavrSGUruW"
     data-photos='["1x0sPljs2_6DcjTQh5TKyhwQyt1ciKnpS", "1uCTC-Z2JPGn2Wf-rik-OfeOKctaNSCaH", "1THNpx3YGBBgyuMMlQ8-qxHoC_wiQYXga", "1ayoauYYqp314roMKKbNCaaVeTpvd6krC", "1A45B91uIIfncr5FnzjFvBgd94AjlW3Dv", "1d6xn4_3iPobSE54BIxoBlP4fMyM085Wp", "1XQsB-7oB_tdO6rusx2zee9vBn6mNjg-k", "1sUAb29hLAdMoV1DC68KuMHU8dqz-K-Li", "1VzTdODK9iH86Ov1eLcz02qW3i6z-NXad", "1ED5mpS-TfTsEKu7Coj9yAIWEi0bHblT8", "1eWCuc1EOW_SoslgXrAGE376gYh2nVMIs", "1IMHkkx5_2tjRUtlcypJ8_8odMVTDWqWh", "1HBmayJ1DqE8jcTT34hWduefMnWgXyFDn", "1dE1NKA_c5tdGD2wgUfl0pyzQ4FZROdq-", "1yGjY7LpZyPwAmh6e1PnWCFmdJnjSHjW4", "12yFV0Tnp8jb4imtXv4T21qakL82u62IP", "1znVr4YygTgVPD4SD_nrFYltGWrnG3G3H", "14RCZDN_InR3s2NZCQ5WSw6TDACliKHSk", "1ju4spZ--AUJJhiXOlYoZjhB1M0R8C7mr", "1C1dTCU5286WHZ3FITsLRzhEvJ7sDMana", "1kcZ2gXOPoOzAsuha45vUWT81Zg7oc9uY", "1qny5Y5LvKAd3lNvpIZCPY6uLl2n1eDPw", "1bGZKYzZUemQbJgwtY6AUAmJSeMXtbS_s", "1n3SdgOjZZs1RErhT5tHOD8SNVPUg0FAs", "1Wzm9yqoDgPrucHaRc-FdLyj5EF1snRMT", "1Ee48dNMGEfZE8iFhaV_I8X-ZISI6a6y1", "1Livmz1dteWtki_kwkGtCcBm5dkPaWQK6", "1EKVUcQPBSMpPLegTUSRevnuf5NHFTfnK", "1wbhGf70jKzuNzPEFNQSQDVg8QyVBA9L7", "1i0Vc-8gzD_nJbf8wv7QQTF1if_8DGzIQ", "1v18tWBD0b2b9SjsXyivaFvxDn_wm997C", "1nuzysuS2mrIB0s9tXHtYrDS5OTm2BSjK", "1d7uOX-LcrzGApkNR2AIlk7k4jZXrQ3XJ", "1hQLcqU8QQ-zqSNycPw1S3XFJa925AdYL", "1UGqwbSScrUkhpRiyEpAvFxDqnPVLQdoz", "1CcJsueKFNMCzOROOxizSTpqmZarG33NR", "1lXKZuT2iVOuf65Q5_QjlcqT-fhhImq9X", "1tM5td3iB6n0Nv6FKbXszWVgUO2WM5AGU", "14_DF-V9gHJhp_bgVc6zPS4rBIVr6FG1x", "1YftN5DrWvz9mPLqkVZTsWDAT2NNqi5Nz", "1mTNKqPyjPNBAhlHWrb2JRIbKW6ExcZUz", "1gC-PA2mwvONbitSFljuUdtIlQTHelBZR", "1QYEQFv2sjPZnL2qd1gefH2D4sz162b71", "1pkMpeRrk3OgLZtZvAX94gZxorHVMo8Jb", "1umRtswAI0TiTRent1tM8-C57vsWmZhDs", "12nXVlj2tI-XF-kAzQXFqnUZvVF_JmUeg", "1r8rOlbVtYsfRBmZEo2yKlSNviTAh9iMh"]'>
</div>

