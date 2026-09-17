# Day 2 – September 9, 2026: First Conference Day & My Talk

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

Photos from Day 2 are available in my Google Drive album:

[📷 Day 2 Photo Album →](PASTE_YOUR_GOOGLE_DRIVE_FOLDER_LINK_HERE)

<!--
<img src="https://lh3.googleusercontent.com/d/FILE_ID" alt="Description of photo" width="600">
-->
