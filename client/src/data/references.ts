export type Reference = {
  id: string;
  group: "Laterality & history" | "The burden of asymmetry" | "Brain, bridge & plasticity" | "Hands, hips & injury";
  authors: string;
  year: string;
  title: string;
  source: string;
  url: string;
  shows: string;
  why: string;
};

/**
 * Every factual claim on the site that carries a [n] marker resolves to an entry here.
 * Keep wording of findings faithful to the source. When unsure, say less.
 */
export const REFERENCES: Reference[] = [
  // ── Laterality & history ─────────────────────────────────────────
  {
    id: "papadatou2020",
    group: "Laterality & history",
    authors: "Papadatou-Pastou, M., Ntolka, E., Schmitz, J., et al.",
    year: "2020",
    title: "Human handedness: A meta-analysis",
    source: "Psychological Bulletin, 146(6), 481–524",
    url: "https://doi.org/10.1037/bul0000229",
    shows:
      "Pooling ~2.4 million people, about 10.6% are left-handed (9.3–18.1% depending on definition). Roughly 9 in 10 people favor the right hand.",
    why: "Establishes how lopsided human hand use is, and notes that cultural pressure affects how often left-hand use shows up.",
  },
  {
    id: "frayer2016",
    group: "Laterality & history",
    authors: "Frayer, D. W., Clarke, R. J., Fiore, I., et al.",
    year: "2016",
    title: "OH-65: The earliest evidence for right-handedness in the fossil record",
    source: "Journal of Human Evolution, 100, 65–72",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=OH-65%3A+The+earliest+evidence+for+right-handedness+in+the+fossil+record",
    shows:
      "Cut marks on 1.8-million-year-old Homo habilis teeth point to right-hand tool use. Related work on European Neandertal teeth puts right-handers at roughly 90%.",
    why: "A side preference is ancient. Neuromotion's point is not that preference is unnatural, but that abandoning the other side is.",
  },
  {
    id: "gilbert1992",
    group: "Laterality & history",
    authors: "Gilbert, A. N., & Wysocki, C. J.",
    year: "1992",
    title: "Hand preference and age in the United States",
    source: "Neuropsychologia, 30(7), 601–608",
    url: "https://pubmed.ncbi.nlm.nih.gov/1528408/",
    shows:
      "In a survey of over a million Americans, reported left-handedness was about 3% among people born around 1900 and about 11% among those born after mid-century.",
    why: "A threefold swing within a few generations shows how strongly culture, schooling and tools shape which side people use.",
  },
  {
    id: "mcmanus2009",
    group: "Laterality & history",
    authors: "McManus, I. C.",
    year: "2009",
    title: "The history and geography of human handedness",
    source: "In Sommer & Kahn (Eds.), Language Lateralization and Psychosis. Cambridge University Press",
    url: "https://jhanley.biostat.mcgill.ca/bios601/CandHchapter06/HistoryGeographyHumanHandedness.pdf",
    shows:
      "Rates of left-handedness fell to a low of about 3% around the turn of the 20th century, a dip McManus links to social pressure from universal education and industrialization, including machines made for right-handers.",
    why: "Connects the industrial era to a measurable suppression of one side of the body.",
  },
  {
    id: "franklin",
    group: "Laterality & history",
    authors: "Franklin, B.",
    year: "late 1700s",
    title: "A Petition to Those Who Have the Superintendency of Education (“A Petition of the Left Hand”)",
    source: "Collected in Franklin's Writings (Library of America)",
    url: "https://ota.bodleian.ox.ac.uk/repository/xmlui/handle/20.500.12024/1573",
    shows:
      "Written in the voice of the left hand, it protests being denied the education given to its “twin sister,” the right.",
    why: "More than two centuries ago, Franklin argued that both hands deserve equal training.",
  },

  // ── The burden of asymmetry ──────────────────────────────────────
  {
    id: "gbd2023lbp",
    group: "The burden of asymmetry",
    authors: "GBD 2021 Low Back Pain Collaborators",
    year: "2023",
    title: "Global, regional, and national burden of low back pain, 1990–2020, its attributable risk factors, and projections to 2050",
    source: "The Lancet Rheumatology, 5(6), e316–e329",
    url: "https://doi.org/10.1016/S2665-9913(23)00098-X",
    shows:
      "Low back pain affected about 619 million people in 2020, is the leading cause of years lived with disability, and is projected to reach about 843 million cases by 2050.",
    why: "Shows the scale of the movement-health problem Neuromotion aims to get ahead of.",
  },
  {
    id: "cieza2020",
    group: "The burden of asymmetry",
    authors: "Cieza, A., Causey, K., Kamenov, K., et al.",
    year: "2020",
    title: "Global estimates of the need for rehabilitation based on the Global Burden of Disease study 2019",
    source: "The Lancet, 396(10267), 2006–2017",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Global+estimates+of+the+need+for+rehabilitation+based+on+the+Global+Burden+of+Disease+study+2019",
    shows: "About 1.71 billion people live with musculoskeletal conditions, the largest contributor to global rehabilitation need.",
    why: "Movement dysfunction is the single biggest category of global rehabilitation need.",
  },
  {
    id: "rikard2023",
    group: "The burden of asymmetry",
    authors: "Rikard, S. M., Strahan, A. E., Schmit, K. M., & Guy, G. P.",
    year: "2023",
    title: "Chronic Pain Among Adults — United States, 2019–2021",
    source: "MMWR, 72(15), 379–385 (CDC)",
    url: "https://www.cdc.gov/mmwr/volumes/72/wr/mm7215a1.htm",
    shows: "An estimated 20.9% of U.S. adults (about 51.6 million people) experienced chronic pain in 2021.",
    why: "Roughly one in five adults lives with chronic pain.",
  },
  {
    id: "hansraj2014",
    group: "The burden of asymmetry",
    authors: "Hansraj, K. K.",
    year: "2014",
    title: "Assessment of stresses in the cervical spine caused by posture and position of the head",
    source: "Surgical Technology International, 25, 277–279",
    url: "https://pubmed.ncbi.nlm.nih.gov/25393825/",
    shows:
      "A computer model estimated neck load rising from ~10–12 lb in neutral to ~27 lb at 15°, ~40 lb at 30°, ~49 lb at 45° and ~60 lb at 60° of forward head tilt.",
    why: "Illustrates how much load a habitual posture can add. These are modeled estimates, not measurements.",
  },

  // ── Brain, bridge & plasticity ───────────────────────────────────
  {
    id: "statpearlsCC",
    group: "Brain, bridge & plasticity",
    authors: "Goldstein, A., Covington, B. P., Mahabadi, N., & Mesfin, F. B.",
    year: "2023",
    title: "Neuroanatomy, Corpus Callosum",
    source: "StatPearls (NCBI Bookshelf)",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK448209/",
    shows: "The corpus callosum is the largest white-matter tract in the brain, with roughly 200 million myelinated fibers linking the two hemispheres.",
    why: "This bridge is the physical pathway for interhemispheric communication.",
  },
  {
    id: "corticospinal",
    group: "Brain, bridge & plasticity",
    authors: "StatPearls (NCBI Bookshelf)",
    year: "2023",
    title: "Neuroanatomy, Corticospinal Tract",
    source: "StatPearls (NCBI Bookshelf)",
    url: "https://www.ncbi.nlm.nih.gov/books/?term=corticospinal+tract",
    shows: "About 85–90% of corticospinal motor fibers cross to the opposite side at the lower medulla (the pyramidal decussation).",
    why: "Each hemisphere mainly drives the opposite side of the body, so a neglected side means an under-trained hemisphere.",
  },
  {
    id: "kennerley2002",
    group: "Brain, bridge & plasticity",
    authors: "Kennerley, S. W., Diedrichsen, J., Hazeltine, E., Semjen, A., & Ivry, R. B.",
    year: "2002",
    title: "Callosotomy patients exhibit temporal uncoupling during continuous bimanual movements",
    source: "Nature Neuroscience, 5(4), 376–381",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Callosotomy+patients+exhibit+temporal+uncoupling+during+continuous+bimanual+movements",
    shows: "When the corpus callosum is surgically cut, aspects of two-handed coordination break down.",
    why: "Bilateral coordination depends on the bridge between hemispheres.",
  },
  {
    id: "schlaug1995",
    group: "Brain, bridge & plasticity",
    authors: "Schlaug, G., Jäncke, L., Huang, Y., Staiger, J. F., & Steinmetz, H.",
    year: "1995",
    title: "Increased corpus callosum size in musicians",
    source: "Neuropsychologia, 33(8), 1047–1055",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Increased+corpus+callosum+size+in+musicians",
    shows: "Musicians had a larger anterior corpus callosum than non-musicians, especially those who began training before age 7.",
    why: "Years of demanding two-handed practice go together with a larger bridge, most of all when training starts young. (Correlational.)",
  },
  {
    id: "steele2013",
    group: "Brain, bridge & plasticity",
    authors: "Steele, C. J., Bailey, J. A., Zatorre, R. J., & Penhune, V. B.",
    year: "2013",
    title: "Early musical training and white-matter plasticity in the corpus callosum: evidence for a sensitive period",
    source: "Journal of Neuroscience, 33(3), 1282–1290",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Early+musical+training+and+white-matter+plasticity+in+the+corpus+callosum%3A+evidence+for+a+sensitive+period",
    shows: "Early-trained musicians showed greater white-matter integrity in part of the corpus callosum, related to age of training onset.",
    why: "Supports starting bilateral training in childhood.",
  },
  {
    id: "draganski2004",
    group: "Brain, bridge & plasticity",
    authors: "Draganski, B., Gaser, C., Busch, V., et al.",
    year: "2004",
    title: "Neuroplasticity: Changes in grey matter induced by training",
    source: "Nature, 427, 311–312",
    url: "https://doi.org/10.1038/427311a",
    shows: "Three months of learning to juggle increased grey matter in motion-processing areas, which receded when practice stopped.",
    why: "The adult brain physically changes with new motor skills, and it gives back what isn't used.",
  },
  {
    id: "scholz2009",
    group: "Brain, bridge & plasticity",
    authors: "Scholz, J., Klein, M. C., Behrens, T. E. J., & Johansen-Berg, H.",
    year: "2009",
    title: "Training induces changes in white-matter architecture",
    source: "Nature Neuroscience, 12(11), 1370–1371",
    url: "https://doi.org/10.1038/nn.2412",
    shows: "Six weeks of juggling practice changed white-matter structure in healthy adults, regardless of how skilled they became.",
    why: "Practice itself rewires connections. You don't have to be good at it yet for the brain to change.",
  },
  {
    id: "manca2017",
    group: "Brain, bridge & plasticity",
    authors: "Manca, A., Dragone, D., Dvir, Z., & Deriu, F.",
    year: "2017",
    title: "Cross-education of muscular strength following unilateral resistance training: a meta-analysis",
    source: "European Journal of Applied Physiology, 117(11), 2335–2354",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=Cross-education+of+muscular+strength+following+unilateral+resistance+training%3A+a+meta-analysis",
    shows: "Training one limb increased strength in the untrained opposite limb by about 11.9% on average (31 trials, 785 people).",
    why: "The two sides are neurally linked. Training one side talks to the other.",
  },
  {
    id: "nielsen2013",
    group: "Brain, bridge & plasticity",
    authors: "Nielsen, J. A., Zielinski, B. A., Ferguson, M. A., Lainhart, J. E., & Anderson, J. S.",
    year: "2013",
    title: "An evaluation of the left-brain vs. right-brain hypothesis with resting state functional connectivity MRI",
    source: "PLoS ONE, 8(8), e71275",
    url: "https://doi.org/10.1371/journal.pone.0071275",
    shows: "Hemispheres have specialized hubs, but people are not “left-brained” or “right-brained” overall.",
    why: "What matters is not which side dominates, but how well the two sides work together.",
  },

  // ── Hands, hips & injury ─────────────────────────────────────────
  {
    id: "napier1956",
    group: "Hands, hips & injury",
    authors: "Napier, J. R.",
    year: "1956",
    title: "The prehensile movements of the human hand",
    source: "Journal of Bone and Joint Surgery (British), 38-B(4), 902–913",
    url: "https://doi.org/10.1302/0301-620X.38B4.902",
    shows: "All human grasping can be described by two basic patterns: the precision grip (thumb against fingertips) and the power grip (fingers clamping against the palm).",
    why: "The classic scientific basis for Neuromotion's Inner Grip (precision) and Outer Grip (power).",
  },
  {
    id: "khayambashi2016",
    group: "Hands, hips & injury",
    authors: "Khayambashi, K., Ghoddosi, N., Straub, R. K., & Powers, C. M.",
    year: "2016",
    title: "Hip muscle strength predicts noncontact anterior cruciate ligament injury in male and female athletes",
    source: "American Journal of Sports Medicine, 44(2), 355–361",
    url: "https://doi.org/10.1177/0363546515616237",
    shows: "In 501 athletes, weaker preseason hip abduction and external-rotation strength predicted later noncontact ACL injury.",
    why: "Hip stability, the Base, protects the joints below it.",
  },
  {
    id: "croisier2008",
    group: "Hands, hips & injury",
    authors: "Croisier, J.-L., Ganteaume, S., Binet, J., Genty, M., & Ferret, J.-M.",
    year: "2008",
    title: "Strength imbalances and prevention of hamstring injury in professional soccer players",
    source: "American Journal of Sports Medicine, 36(8), 1469–1475",
    url: "https://doi.org/10.1177/0363546508316764",
    shows: "Among 462 professional players, untreated strength imbalances raised hamstring-injury risk; correcting them brought risk back toward normal.",
    why: "Imbalance is a measurable, correctable injury risk in athletes.",
  },
  {
    id: "vleeming1995",
    group: "Hands, hips & injury",
    authors: "Vleeming, A., Pool-Goudzwaard, A. L., Stoeckart, R., van Wingerden, J. P., & Snijders, C. J.",
    year: "1995",
    title: "The posterior layer of the thoracolumbar fascia: its function in load transfer from spine to legs",
    source: "Spine, 20(7), 753–758",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=The+posterior+layer+of+the+thoracolumbar+fascia+its+function+in+load+transfer+from+spine+to+legs",
    shows: "The gluteus maximus on one side and the latissimus dorsi on the other are linked through the thoracolumbar fascia, forming a cross-body route for transferring load.",
    why: "Anatomical support for the Ambi Curve: energy travels diagonally from one leg to the opposite arm.",
  },
  {
    id: "trendelenburg",
    group: "Hands, hips & injury",
    authors: "Gandbhir, V. N., Lam, J. C., & Rayi, A.",
    year: "2023",
    title: "Trendelenburg Gait",
    source: "StatPearls (NCBI Bookshelf)",
    url: "https://www.ncbi.nlm.nih.gov/books/?term=Trendelenburg+gait",
    shows: "When the hip abductors (chiefly gluteus medius) can't hold the pelvis level on one leg, the opposite side of the pelvis drops and the trunk leans to compensate.",
    why: "A clear clinical example of how a weak Base sends compensation up the whole chain.",
  },
];

export const REFERENCE_GROUPS = [
  "Laterality & history",
  "The burden of asymmetry",
  "Brain, bridge & plasticity",
  "Hands, hips & injury",
] as const;
