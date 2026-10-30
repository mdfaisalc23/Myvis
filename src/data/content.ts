/**
 * MYVIS STUDIO - Architectural & Structural Engineering Data
 * Brand Tagline: "Designing Spaces. Engineering Strength."
 */

export interface ServiceCategory {
  id: string;
  categoryName: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  softwareTools: string[];
  subServices: {
    title: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Institutional' | 'Industrial' | 'Interior' | 'Structural Engineering';
  location: string;
  area: string;
  year: string;
  structuralSystem: string;
  seismicDesign: string;
  architecturalConcept: string;
  structuralDescription: string;
  image: string;
  schematicType: 'cantilever' | 'diagrid' | 'vault' | 'truss';
  keyHighlights: string[];
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  shortSummary: string;
  duration: string;
  deliverables: string[];
  engineeringFocus: string;
}

export const BRAND_INFO = {
  name: "MYVIS STUDIO",
  tagline: "Designing Spaces. Engineering Strength.",
  established: "2012",
  headquarters: "Metropolitan Design District, Suite 400",
  coordinates: "40.7128° N, 74.0060° W",
  email: "contact@myvisstudio.com",
  inquiriesEmail: "projects@myvisstudio.com",
  phone: "+91 74558 26896",
  whatsappNumber: "+917455826896",
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    archdaily: "https://archdaily.com",
    behance: "https://behance.net",
  },
  stats: [
    { label: "Engineered Projects", value: "140+" },
    { label: "Code & Seismic Rigor", value: "100%" },
    { label: "Combined Experience", value: "18+ Yrs" },
    { label: "Structural Optimization", value: "22% Avg" },
  ]
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "architectural-design",
    categoryName: "A. Architectural Design",
    shortTitle: "Architectural Design",
    tagline: "Spaces conceived with poetic clarity and spatial proportion.",
    description: "Holistic architectural solutions blending spatial intelligence, material beauty, and functional efficiency across residential, commercial, and civic sectors.",
    softwareTools: ["AutoCAD Architecture", "Rhino 3D", "SketchUp Pro", "Enscape / V-Ray", "Photoshop"],
    deliverables: ["2D Working & Permit Drawings", "Photorealistic 3D Visualizations", "Dimensioned Section Cuts", "Comprehensive Space Plans"],
    subServices: [
      { title: "Residential Architecture", description: "Bespoke contemporary residences, luxury cantilever villas, and multi-unit housing tailored to site topography." },
      { title: "Commercial Buildings", description: "Corporate offices, high-performance retail complexes, and mixed-use commercial developments." },
      { title: "Institutional Buildings", description: "Civic pavilions, educational campuses, healthcare centers, and cultural facilities designed for long-term community impact." },
      { title: "Interior Space Planning", description: "Ergonomic interior zoning, acoustic treatment, circulation optimization, and tailored architectural joinery." },
      { title: "2D Architectural Drawings (Plan, Section, Elevation)", description: "Precision site layouts, dimensioned floor plans, section cuts, wall details, and statutory permit submissions at ₹15/sft." },
      { title: "3D Visualization & Rendering Views", description: "Atmospheric raytraced renderings, sun-path lighting studies, material mockups, and exterior facade 3D renders at ₹20/sft." },
      { title: "Building Elevations", description: "Contemporary facade articulations, parametric louver systems, curtain wall detailing, and cladding interfaces." },
      { title: "Working Drawings", description: "Exhaustive construction drawing packages coordinating architectural and structural engineering details." }
    ]
  },
  {
    id: "structural-engineering",
    categoryName: "B. Structural Engineering",
    shortTitle: "Structural Engineering",
    tagline: "Scientifically engineered load paths for permanent safety and resilience.",
    description: "Advanced analytical and finite element design of complex structural systems that resist gravity, lateral seismic tremors, and aerodynamic wind pressures.",
    softwareTools: ["ETABS", "SAP2000", "SAFE", "Tekla Structural Designer", "RISA-3D", "AutoCAD Structural"],
    deliverables: ["Structural Calculation Book", "Reinforcement & Rebar Schedules", "Member Framing Drawings", "Seismic Compliance Certification"],
    subServices: [
      { title: "Plan, Section & Reinforcement Details", description: "Complete structural drawings, rebar detailing, beam-column schedules, and foundation layouts at ₹15/sft." },
      { title: "Site Visit for Technical Inspection", description: "On-site quality audit, rebar placement verification before concrete casting, and construction checks at ₹5,000/visit." },
      { title: "RCC Structural Design", description: "Reinforced concrete frames, flat slabs, post-tensioned elements, shear walls, and deep core designs." },
      { title: "Steel Structure Design", description: "Heavy structural steel frames, castellated beams, space frames, and moment-resisting structural steel skeletons." },
      { title: "Timber Structural Design", description: "Mass timber systems, glulam beams, cross-laminated timber (CLT) floors, and sustainable hybrid frameworks." },
      { title: "Foundation Design", description: "Geotechnical coordination, isolated footings, combined mats, raft foundations, and deep driven/bored pile caps." },
      { title: "Beam and Column Design", description: "Optimized section sizing, ductile reinforcement detailing, and deflection control calculations according to IS/ACI/Eurocode." },
      { title: "Structural Analysis & Seismic Design", description: "Non-linear dynamic analysis, finite element modeling (FEM), p-delta effects, and lateral drift assessments." },
      { title: "Structural Assessment & Retrofitting", description: "In-situ testing, crack mapping, load capacity auditing, and carbon fiber (CFRP) strengthening." }
    ]
  },
  {
    id: "engineering-consultancy",
    categoryName: "C. Engineering Consultancy & Estimation",
    shortTitle: "Estimation & Consultancy",
    tagline: "Rigorous estimation, bill of quantities (BOQ), and site supervision.",
    description: "Comprehensive technical advisory services bridging project feasibility, material estimation, contractor BOQs, and statutory construction documentation.",
    softwareTools: ["AutoCAD Civil", "Microsoft Excel", "Bluebeam Revu", "CostX", "Microsoft Project"],
    deliverables: ["Bill of Quantities (BOQ)", "Steel Tonnage Takeoff", "Site Inspection Logs", "Contractor Tender Packages"],
    subServices: [
      { title: "Estimation & BOQ (₹10/sft)", description: "Accurate itemized estimation, rebar tonnage calculation, cement/sand/aggregate takeoffs, and contractor bidding sheets." },
      { title: "Site Technical Inspections (₹5,000/visit)", description: "Independent site quality audits, formwork leveling inspection, and rebar binding verification." },
      { title: "Site Survey Coordination", description: "Topographical contour mapping, boundary verification, laser LiDAR scanning, and benchmark calibration." },
      { title: "Geotechnical Investigation Coordination", description: "Standard penetration test (SPT) analysis, soil bearing capacity reports, groundwater evaluation, and settlement models." },
      { title: "Structural Auditing", description: "Comprehensive structural condition assessments for existing residential, commercial, and industrial structures." },
      { title: "Construction Drawings", description: "Bar bending schedules (BBS), shop drawings, connection detail sheets, and field-ready construction blue prints." },
      { title: "Design Review & Value Engineering", description: "Independent third-party peer reviews to identify structural over-design, reduce steel tonnage, and accelerate construction." }
    ]
  },
  {
    id: "specialized-structural",
    categoryName: "D. Specialized Structural Design",
    shortTitle: "Specialized Structural Design",
    tagline: "High-precision engineering for unconventional geometries and long spans.",
    description: "Specialized analytical engineering for architectural statement pieces, extended column-free spans, expressive trusses, and complex mechanical connections.",
    softwareTools: ["IDEA StatiCa", "ANSYS Structural", "Rhino/Karamba3D", "Limcon"],
    deliverables: ["Finite Element Connection Reports", "Erection Sequence Plans", "Truss Deflection Envelopes", "Specialized Node Details"],
    subServices: [
      { title: "Wood Frame Structures", description: "Light-frame timber construction, heavy timber timber framing, and engineered lumber structural systems." },
      { title: "Steel Frame Structures", description: "Industrial portal frames, cold-formed steel framing, high-bay warehouse superstructures, and mezzanine decks." },
      { title: "Moment Resisting Frames", description: "Special (SMF) and intermediate (IMF) moment frames engineered with beam-column plastic hinge behavior." },
      { title: "Roof Trusses & Long Spans", description: "Pratt, Warren, and space trusses spanning over 40+ meters for stadiums, atriums, and exhibition halls." },
      { title: "Connection Design", description: "Bolted and welded structural connection design, base plate anchor bolt finite element verification via IDEA StatiCa." },
      { title: "Structural Calculations", description: "Hand calculation checks, software verification books, thermal expansion stress calculations, and vibration comfort studies." }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "cantilever-villa",
    title: "The Horizon Cantilever Residence",
    category: "Residential",
    location: "Kavala Ridge, Coastal Escarpment",
    area: "4,600 sq ft (427 sq m)",
    year: "2025",
    structuralSystem: "Post-Tensioned Concrete & Structural Steel Hybrid Cantilever",
    seismicDesign: "Seismic Zone IV, Ductile Shear Core + Tuned Mass Wall",
    architecturalConcept: "A dramatic 7.2-meter floating upper volume that hovers weightlessly above a transparent glass living pavilion, connecting panoramic coastal vistas with raw board-formed concrete minimalism.",
    structuralDescription: "Engineered with a high-strength post-tensioned cantilevered concrete transfer box beam integrated with interior steel Vierendeel trussing to eliminate intermediate columns and control long-term creep deflection to < L/600.",
    image: "/src/assets/images/project_villa_cantilever_1793366602587.jpg",
    schematicType: "cantilever",
    keyHighlights: ["7.2m Column-free Cantilever", "Integrated In-slab Post-Tensioning", "Thermally Broken Concrete Facade", "Subterranean Rock Anchor Footings"]
  },
  {
    id: "novus-innovation-hq",
    title: "Novus Timber Diagrid Headquarters",
    category: "Commercial",
    location: "Metropolitan Financial District",
    area: "72,000 sq ft (6,689 sq m)",
    year: "2024",
    structuralSystem: "Mass Timber Glulam & High-Tensile Steel Diagrid Exoskeleton",
    seismicDesign: "High Ductility Braced Diagrid Frame with Replaceable Energy Dissipation Links",
    architecturalConcept: "An open, biophilic corporate workplace featuring tiered garden terraces and an expressive geometric structural facade that acts as both sunshade and primary gravity-lateral support.",
    structuralDescription: "The exterior perimeter diagrid carries 85% of lateral wind and seismic shears, allowing expansive column-free interior floor plates and reducing embodied carbon by 38% compared to traditional concrete towers.",
    image: "/src/assets/images/project_commercial_tower_1793366601547.jpg",
    schematicType: "diagrid",
    keyHighlights: ["38% Reduced Embodied Carbon", "Column-Free 18m Interior Spans", "Exposed Architectural Glulam Nodes", "LEED Platinum Engineered Envelope"]
  },
  {
    id: "solis-cultural-pavilion",
    title: "Solis Contemporary Museum & Colonnade",
    category: "Institutional",
    location: "Civic Cultural Commons",
    area: "36,800 sq ft (3,418 sq m)",
    year: "2024",
    structuralSystem: "Fluted Sculptural Self-Consolidating Architectural Concrete Shell",
    seismicDesign: "Base-Isolated Substructure with Elastomeric Bearings",
    architecturalConcept: "A serene civic monument featuring rhythmic fluted parabolic concrete colonnades that shade expansive exhibition galleries and filter natural zenithal daylight into reflecting stone courtyards.",
    structuralDescription: "Each 8-meter fluted concrete pylon acts as an integrated vertical gravity column and rainwater drainage conduit, cast with custom steel forms using 60 MPa white portland self-consolidating concrete.",
    image: "/src/assets/images/project_civic_cultural_1793366600942.jpg",
    schematicType: "vault",
    keyHighlights: ["8.4m Sculptural Fluted Pylons", "Elastomeric Base-Isolation Bearing System", "Zero-Crack Crack-Width Controlled Mix", "Acoustically Isolated Gallery Slabs"]
  },
  {
    id: "aeroform-logistics-hub",
    title: "AeroForm Long-Span Logistics Superstructure",
    category: "Industrial",
    location: "Harbor Port Terminal Logistics Park",
    area: "98,000 sq ft (9,104 sq m)",
    year: "2023",
    structuralSystem: "High-Strength Steel Tubular Space Trusses & Moment-Resisting Frame",
    seismicDesign: "Buckling-Restrained Braced Frames (BRBF)",
    architecturalConcept: "A hyper-efficient industrial hub where industrial functionality meets clean architectural lines, featuring continuous daylight clerestories and expansive automated storage bays.",
    structuralDescription: "48-meter clear-span steel tubular trusses designed with welded cast-steel nodes to support overhead crane gantries (25-ton load capacity) while minimizing roof dead weight.",
    image: "/src/assets/images/hero_architecture_geometry_1793366599926.jpg",
    schematicType: "truss",
    keyHighlights: ["48m Clear Span Trusses", "25-Ton Gantry Crane Load Capacity", "Buckling-Restrained Seismic Bracing", "Deep Bored Friction Piles"]
  },
  {
    id: "atelier-v-studio",
    title: "Atelier V Structural Studio & Gallery",
    category: "Interior",
    location: "Old Foundry Arts Quarter",
    area: "9,200 sq ft (855 sq m)",
    year: "2025",
    structuralSystem: "Exposed Steel Rod Bracing with Cross-Laminated Timber (CLT) Mezzanines",
    seismicDesign: "Supplemental Viscous Damper Braces tied to Historic Masonry",
    architecturalConcept: "Adaptive reuse of an early 20th-century brick industrial warehouse into a light-filled multi-disciplinary design studio, highlighting the dialogue between raw historical brick and razor-sharp steel joinery.",
    structuralDescription: "Suspended steel mezzanine hung from existing roof ironwork using high-tensile Macalloy tie rods, paired with discreet internal seismic bracing to preserve original perimeter brick walls without external alteration.",
    image: "/src/assets/images/hero_architecture_geometry_1793366599926.jpg",
    schematicType: "cantilever",
    keyHighlights: ["Historic Preservation Seismics", "Suspended Macalloy Rod Mezzanine", "Acoustically Decoupled Floor Systems", "Exposed Structural Connections"]
  },
  {
    id: "metropolis-tower-retrofit",
    title: "Metropolis High-Rise Structural Rehabilitation",
    category: "Structural Engineering",
    location: "Central Business Core",
    area: "124,000 sq ft (11,520 sq m)",
    year: "2024",
    structuralSystem: "Reinforced Concrete Core with Fluid Viscous Dampers & CFRP Wrapping",
    seismicDesign: "Targeted Performance-Based Seismic Upgrade (ASCE 41-17)",
    architecturalConcept: "Modernization of a 1970s brutalist office building into a premier energy-efficient tower with an added 2-story rooftop sky atrium and upgraded structural envelope.",
    structuralDescription: "Comprehensive non-destructive testing, finite element seismic reassessment, installation of 32 fluid viscous dampers across transfer floors, and carbon fiber polymer (CFRP) wrapping to increase shear capacity by 45%.",
    image: "/src/assets/images/project_commercial_tower_1793366601547.jpg",
    schematicType: "diagrid",
    keyHighlights: ["45% Increase in Shear Capacity", "ASCE 41-17 Performance Compliance", "32 Fluid Viscous Dampers Installed", "Zero Tenant Disruption During Works"]
  }
];

export const DESIGN_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Initial Consultation",
    shortSummary: "Understanding client requirements, budget, timeline, and programmatic objectives.",
    duration: "1–2 Weeks",
    deliverables: ["Project Brief Document", "Programmatic Matrix", "Feasibility Assessment", "Preliminary Cost Bracket"],
    engineeringFocus: "Identifying regulatory zoning constraints, preliminary structural typology suitability, and architectural aspirations."
  },
  {
    step: "02",
    number: "02",
    title: "Site Analysis",
    shortSummary: "Site survey, soil investigation coordination, environmental forces, and topography assessment.",
    duration: "2–3 Weeks",
    deliverables: ["Topographical Laser Survey", "Geotechnical Soil Report Review", "Solar & Wind Exposure Modeling", "Existing Utility Mapping"],
    engineeringFocus: "Calculating soil bearing capacities (SBC), seismic ground motion parameters, water table levels, and foundation strategy."
  },
  {
    step: "03",
    number: "03",
    title: "Architectural Concept",
    shortSummary: "Space planning, architectural massing, facade articulation, and immersive 3D visualizations.",
    duration: "3–4 Weeks",
    deliverables: ["Concept Floor Plans", "Volumetric 3D Massing Studies", "Photorealistic Renders", "Material Moodboard"],
    engineeringFocus: "Harmonizing aesthetic forms with logical column grids, cantilever proportions, and structural efficiency."
  },
  {
    step: "04",
    number: "04",
    title: "Structural Engineering",
    shortSummary: "Mathematical structural analysis, finite element modeling, member sizing, and foundation engineering.",
    duration: "3–5 Weeks",
    deliverables: ["3D Finite Element Analysis Model", "Column & Beam Schedule", "Foundation Structural Drawings", "Seismic Compliance Calculations"],
    engineeringFocus: "Analyzing wind drag, seismic drift limits, live/dead gravity load paths, and stress concentration mitigation."
  },
  {
    step: "05",
    number: "05",
    title: "Technical Documentation",
    shortSummary: "Architectural permit drawings, structural engineering calculations, and detailed construction documentation.",
    duration: "3–4 Weeks",
    deliverables: ["Full Permit Drawing Set", "Bar Bending Schedules (BBS)", "Structural Calculation Book", "Bill of Quantities (BOQ) & Tender Package"],
    engineeringFocus: "Exhaustive cross-referencing between architectural details, MEP penetrations, and rebar reinforcement."
  },
  {
    step: "06",
    number: "06",
    title: "Project Support",
    shortSummary: "Technical assistance during construction, site inspection visits, and engineering design coordination.",
    duration: "Construction Phase",
    deliverables: ["Site Inspection Logs", "Rebar Inspection Approvals", "RFI (Request for Information) Responses", "As-Built Certified Drawings"],
    engineeringFocus: "On-site quality assurance, concrete pour supervision, steel torque inspections, and engineering problem-solving."
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: "01",
    title: "Integrated Architectural & Structural Design",
    description: "Eliminate friction between architects and engineers. By housing both disciplines under one roof, our designs are structurally feasible from day one without sacrificing aesthetic audacity.",
    stat: "35% Faster",
    statLabel: "Design Coordination Timeline"
  },
  {
    number: "02",
    title: "Site-Specific Engineering Solutions",
    description: "We do not believe in cookie-cutter designs. Every foundation, framing system, and envelope is custom-tailored to site geology, microclimate, and local seismic hazards.",
    stat: "100%",
    statLabel: "Custom Geotechnical Calibration"
  },
  {
    number: "03",
    title: "Safety-Focused Structural Design",
    description: "Our structural calculations adhere to international building codes (IBC, Eurocodes, ACI, IS) with generous safety factors, rigorous ductile detailing, and seismic energy dissipation.",
    stat: "Zero",
    statLabel: "Structural Non-Compliance Record"
  },
  {
    number: "04",
    title: "Modern and Functional Architecture",
    description: "Form follows function, elevated by sculptural proportion. We create spaces filled with natural daylight, intuitive circulation, and timeless material elegance.",
    stat: "140+",
    statLabel: "Realized Spatial Landmarks"
  },
  {
    number: "05",
    title: "Cost-Effective Engineering",
    description: "Smart engineering saves money. Through finite element optimization, we reduce unnecessary concrete volume and structural steel tonnage without compromising safety.",
    stat: "18-24%",
    statLabel: "Average Material Cost Savings"
  },
  {
    number: "06",
    title: "Professional Technical Documentation",
    description: "Contractors love building our projects. Our construction drawings are clear, dimensionally verified, coordinate architectural and structural details, and are accompanied by comprehensive bar bending schedules.",
    stat: "100%",
    statLabel: "Accurate Construction Blueprints"
  },
  {
    number: "07",
    title: "Multidisciplinary Design Approach",
    description: "From site analysis and architectural concepts to structural calculations, technical site inspection visits, and material estimation, we guide projects through every milestone.",
    stat: "End-to-End",
    statLabel: "Single Point of Responsibility"
  }
];

export interface OfficialRateItem {
  id: string;
  category: 'Architectural' | 'Structural' | 'Estimation';
  categoryNumber: '1' | '2' | '3';
  title: string;
  rate: number;
  unit: '/sft' | '/visit';
  rateDisplay: string;
  description: string;
  deliverables: string[];
}

export const OFFICIAL_PRICING: {
  architectural: OfficialRateItem[];
  structural: OfficialRateItem[];
  estimation: OfficialRateItem[];
} = {
  architectural: [
    {
      id: "arch_plan_section_elevation",
      category: "Architectural",
      categoryNumber: "1",
      title: "Plan, Section, Elevation",
      rate: 15,
      unit: "/sft",
      rateDisplay: "₹15 / sft",
      description: "Complete 2D architectural working drawings including precise floor plans, longitudinal/cross section cuts, and exterior elevations.",
      deliverables: ["Dimensioned Floor Plans", "Longitudinal & Cross Section Cuts", "Front, Rear & Side Building Elevations", "Window & Door Schedules"]
    },
    {
      id: "arch_3d_render",
      category: "Architectural",
      categoryNumber: "1",
      title: "3D Render View",
      rate: 20,
      unit: "/sft",
      rateDisplay: "₹20 / sft",
      description: "High-resolution architectural 3D perspective visualization with realistic lighting, textures, material finishes, and landscaped views.",
      deliverables: ["Photorealistic 3D Exterior Views", "Material & Color Palette Visualizer", "Daylight & Ambient Lighting Modeling", "Facade Articulation Preview"]
    }
  ],
  structural: [
    {
      id: "struct_plan_section_reinforcement",
      category: "Structural",
      categoryNumber: "2",
      title: "Plan, Section, Reinforcement Details",
      rate: 15,
      unit: "/sft",
      rateDisplay: "₹15 / sft",
      description: "Complete structural engineering package with foundation layouts, column/beam schedules, slab reinforcement details, and rebar bending schedules.",
      deliverables: ["Foundation & Footing Layout", "Column Centerline & Sizing", "Plinth & Floor Beam Schedules", "Slab Reinforcement & BBS"]
    },
    {
      id: "struct_site_visit",
      category: "Structural",
      categoryNumber: "2",
      title: "Site Visit for Technical Inspection",
      rate: 5000,
      unit: "/visit",
      rateDisplay: "₹5,000 / visit",
      description: "On-site quality audit and technical inspection before slab casting or column pouring by a qualified structural engineer.",
      deliverables: ["Rebar Binding & Spacing Check", "Shuttering & Formwork Inspection", "Concrete Cover Verification", "On-Site Engineer Clearance Report"]
    }
  ],
  estimation: [
    {
      id: "estimation_boq",
      category: "Estimation",
      categoryNumber: "3",
      title: "Estimation & BOQ",
      rate: 10,
      unit: "/sft",
      rateDisplay: "₹10 / sft",
      description: "Comprehensive material quantity takeoff and contractor Bill of Quantities (BOQ) for cement, sand, aggregates, and steel rebar.",
      deliverables: ["Material Quantity Calculations", "Steel Rebar Tonnage Estimation", "Contractor Itemized BOQ", "Approximate Construction Budget Breakdown"]
    }
  ]
};

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: "Load Path Clarity",
    equation: "ΣF = 0 & ΣM = 0",
    description: "A continuous, uninterrupted transfer of gravity, wind, and seismic loads straight into the subterranean earth is the foundation of durable architecture."
  },
  {
    title: "Material Efficiency",
    equation: "σ = M · y / I ≤ [σ_adm]",
    description: "We place material only where physics demands it. Concrete in compression, steel in tension, timber in rhythmic harmony."
  },
  {
    title: "Seismic & Dynamic Resilience",
    equation: "V_base = C_s · W",
    description: "Rather than rigidly fighting seismic energy, we engineer controlled ductility, energy-dissipating joints, and tuned structural flexibility."
  },
  {
    title: "Constructability & Precision",
    equation: "Δ_actual ≤ L / 480",
    description: "Great engineering is not merely theoretical on paper—it is constructible in the field with repeatable contractor tolerances."
  }
];
