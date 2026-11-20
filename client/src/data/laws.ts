export type Law = {
  n: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
  role: string;
  tone: "precision" | "power" | "neutral";
  short: string;
  long: string;
  inDailyLife: string;
  whenItFails: string;
};

export const LAWS: Law[] = [
  {
    n: 1,
    name: "The Base",
    role: "Stabilization",
    tone: "power",
    short: "The grounding side: weight distribution and energy generation.",
    long: "Every movement starts from something that doesn't move. The Base is the side that grounds you, takes your weight, and generates the force the rest of the body will use. Without a Base, the Anchor has nothing to push from.",
    inDailyLife: "The leg you plant to reach a high shelf. The hip you stand on in line at the store. The hand that holds the jar while the other one twists.",
    whenItFails: "The pelvis drops, the trunk leans, the knee caves in. Effort goes up and force goes down.",
  },
  {
    n: 2,
    name: "The Anchor",
    role: "Execution",
    tone: "precision",
    short: "The executing side: extension, direction and task completion.",
    long: "The Anchor is where the Base's energy gets expressed: the hand that writes, the arm that throws, the foot that kicks. It extends, directs and finishes. Most people have one Anchor side and have never asked the other side to execute anything.",
    inDailyLife: "Writing, brushing your teeth, opening doors, dribbling, typing with your stronger hand.",
    whenItFails: "Motion cuts off early, accuracy drops, and the off-side feels like it belongs to someone else.",
  },
  {
    n: 3,
    name: "Inner Grip",
    role: "The precision chain",
    tone: "precision",
    short: "Thumb, index and middle fingers. Median nerve. Fine control, alignment and accuracy.",
    long: "The thumb opposing the first two fingers is the precision grip, driven largely by the median nerve. Neuromotion traces this line of control up the front of the body: forearm flexors, chest, core, quads, and the big-toe side of the foot.",
    inDailyLife: "Holding a pen, buttoning a shirt, threading a needle, the fingertip release on a jump shot.",
    whenItFails: "Movements get shaky and imprecise, and the hand can't find the target.",
  },
  {
    n: 4,
    name: "Outer Grip",
    role: "The power chain",
    tone: "power",
    short: "Ring and little fingers. Ulnar nerve. Force, protection and structure.",
    long: "The ring and little fingers anchor the power grip, and the ulnar nerve supplies the deep hand muscles that lock it. Neuromotion traces this line along the outside and back of the body: rear shoulder, lats, spinal erectors, glutes, hamstrings, and the outer edge of the foot.",
    inDailyLife: "Carrying groceries, pulling a door, swinging a hammer, absorbing contact, landing from a jump.",
    whenItFails: "Strength without structure: energy bleeds out of the joints instead of going into the movement.",
  },
  {
    n: 5,
    name: "The Ambi Curve",
    role: "Energy flow",
    tone: "neutral",
    short: "Humans move in arcs, not lines. Energy travels from Base to Anchor along a curve.",
    long: "Energy transfers from Base to Anchor through the hips, spine and ribs along a natural curved path, usually diagonally across the body from one leg to the opposite arm. One direction of this arc is well rehearsed. The mirror-image arc is the Dual Energy Cycle most people have never trained.",
    inDailyLife: "Walking (opposite arm, opposite leg), throwing, reaching across your body, getting out of a chair.",
    whenItFails: "Movement goes straight and stiff, the spine stops curving, and one side finishes motion while the other cuts it short.",
  },
  {
    n: 6,
    name: "Dynamic Balance",
    role: "The rule",
    tone: "neutral",
    short: "Precision and power must alternate across the body to prevent energy leakage.",
    long: "When the attacking side runs Inner Grip, the base side must run Outer Grip, and vice versa. Two precision chains have nothing grounding them. Two power chains have nothing steering them. Alternation is what traps energy inside the system so it becomes control.",
    inDailyLife: "A pitcher's glove arm pulling in as the throwing hand releases. A basketball player's off-arm shielding while the shooting hand finishes.",
    whenItFails: "Energy leaks: wasted effort, stiffness, poor accuracy, and stress dumped into joints.",
  },
];
