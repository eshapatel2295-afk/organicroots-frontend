// src/Learn/data.js
import soilPre from "../../assets/images/soilpre.png";
import pestControl from "../../assets/images/pestcontrol.jpg";
import compost from "../../assets/images/compost.png";
import waterManage from "../../assets/images/watermanage.png";
import seed from "../../assets/images/seed.png";
import fertilizer from "../../assets/images/fertilizer.png";

export const modulesData = [
    // ... same module data as before ...
    {
        id: 'soil-prep',
        type: 'module',
        title: 'The Foundation: Soil Preparation',
        description: 'Learn to create nutrient-rich soil using compost and natural fertilizers.',
        image: soilPre,
        detail: {
            header: 'Healthy soil is the single most important ingredient for a successful organic garden.',
            contentTitle: 'Key Principles',
            content: 'Creating fertile soil involves balancing three main areas: physical structure, chemical nutrients, and biological life. Organic methods focus on feeding the soil\'s ecosystem, which in turn feeds the plants.',
            stepsTitle: 'Step-by-Step Guide',
            steps: [
                'Test Your Soil: Understand your soil\'s pH and nutrient levels.',
                'Add Organic Matter: Mix in 2-3 inches of well-rotted compost or manure to improve structure and fertility.',
                'Aerate if Necessary: If soil is heavily compacted, use a broadfork to loosen it without destroying its structure.',
                'Apply Mulch: A layer of straw, wood chips, or leaves helps retain moisture, suppress weeds, and regulate soil temperature.'
            ]
        }
    },
    {
        id: 'pest-control',
        type: 'module',
        title: 'Natural Pest Control',
        description: 'Discover effective, chemical-free methods to protect your plants.',
        image: pestControl,
        detail: {
            header: 'Work with nature, not against it, to manage pests and keep your garden healthy.',
            contentTitle: 'Integrated Pest Management (IPM)',
            content: 'The goal is not to eliminate all insects, but to maintain a balanced ecosystem where pests are kept in check by their natural predators.',
            stepsTitle: 'Effective Techniques',
            steps: [
                'Companion Planting: Plant herbs like basil, marigold, and mint alongside vegetables to repel common pests.',
                'Beneficial Insects: Attract ladybugs, lacewings, and hoverflies by planting flowers like dill and yarrow.',
                'Neem Oil Spray: A solution of neem oil, water, and a drop of mild soap is a powerful organic insecticide and fungicide.',
                'Crop Rotation: Avoid planting the same crop in the same spot year after year to break pest life cycles.'
            ]
        }
    },
    {
        id: 'composting',
        type: 'module',
        title: 'Composting 101',
        description: 'Turn kitchen scraps into \'black gold\' for your garden.',
        image: compost,
        detail: {
            header: 'Turn your kitchen scraps and yard waste into nutrient-rich \'black gold\'.',
            contentTitle: 'Why Compost?',
            content: 'Composting reduces landfill waste, saves money on fertilizers, and improves your soil\'s health, structure, and ability to retain water.',
            stepsTitle: 'Getting Started',
            steps: [
                'Choose a Bin: Select a compost bin that suits your space, from tumblers to simple piles.',
                'Balance Greens and Browns: Layer nitrogen-rich "greens" (kitchen scraps, grass clippings) with carbon-rich "browns" (leaves, cardboard).',
                'Keep it Moist: The pile should be as damp as a wrung-out sponge.',
                'Turn Regularly: Aerating the pile every week or two speeds up decomposition.'
            ]
        }
    },
    {
        id: 'water-management',
        type: 'module',
        title: 'Efficient Water Management',
        description: 'Learn techniques like drip irrigation and rainwater harvesting to conserve water.',
        image: waterManage,
        detail: {
            header: 'Water is a precious resource. Using it wisely is key to sustainable and successful farming.',
            contentTitle: 'Smart Watering Strategies',
            content: 'Efficient water management not only conserves water but also promotes healthier plant growth by delivering moisture directly to the roots and preventing fungal diseases.',
            stepsTitle: 'Key Techniques',
            steps: [
                'Drip Irrigation: Install a drip system to deliver water slowly and directly to the plant roots, minimizing evaporation.',
                'Rainwater Harvesting: Set up barrels or a system to collect rainwater from rooftops for later use in the garden.',
                'Mulching: Apply a thick layer of organic mulch around your plants to reduce water evaporation from the soil surface.',
                'Watering Times: Water early in the morning to ensure that water is absorbed before the heat of the day.'
            ]
        }
    },
    {
        id: 'seed-selection',
        type: 'module',
        title: 'Seed Selection and Saving',
        description: 'Choose the right organic, heirloom, and open-pollinated seeds for your garden.',
        image: seed,
        detail: {
            header: 'Great vegetables start with great seeds. Learn how to choose and save the best for your needs.',
            contentTitle: 'Understanding Seed Types',
            content: 'Organic farming emphasizes the use of seeds that are non-GMO and adapted to local conditions. Heirloom seeds offer unique flavors and genetic diversity, while saving your own seeds creates plants that are perfectly suited to your specific garden environment over time.',
            stepsTitle: 'Best Practices',
            steps: [
                'Choose Open-Pollinated Varieties: These seeds will produce plants true-to-type, making them ideal for seed saving.',
                'Select Healthy Plants: Save seeds only from your strongest, healthiest, and most productive plants.',
                'Proper Curing and Storing: Ensure seeds are completely dry before storing them in a cool, dark, and dry place.',
                'Seed Swaps: Connect with local gardeners to swap seeds and increase the variety in your garden.'
            ]
        }
    },
    {
        id: 'organic-fertilizers',
        type: 'module',
        title: 'Making Organic Fertilizers',
        description: 'Create powerful liquid fertilizers like Jeevamrutham and compost tea at home.',
        image: fertilizer,
        detail: {
            header: 'Feed your soil with homemade, living fertilizers to boost microbial life and plant vitality.',
            contentTitle: 'Beyond Compost',
            content: 'While compost provides a solid base, liquid organic fertilizers deliver a quick boost of nutrients and beneficial microorganisms directly to your plants. Formulations like Jeevamrutham are widely used in Indian organic farming to enhance soil fertility.',
            stepsTitle: 'Simple Recipes',
            steps: [
                'Compost Tea: Steep a bag of finished compost in a bucket of water for 24-48 hours, aerating if possible, to create a nutrient-rich tea.',
                'Jeevamrutham (Basic): Mix cow dung, cow urine, jaggery (gur), gram flour (besan), and a handful of soil in water. Let it ferment for 2-4 days.',
                'Application: Dilute your liquid fertilizer with water (typically a 1:10 ratio) and apply to the base of your plants or as a foliar spray.',
                'Vermiwash: Collect the liquid leachate from a worm composting bin, which is a potent source of nutrients and microbes.'
            ]
        }
    }
];

export const cropsData = {
    kharif: [
        { id: 'brinjal', type: 'crop', name: 'Brinjal (Baingan)', image: 'https://images.unsplash.com/photo-1583542224340-22e783e7f33d?q=80&w=1974&auto=format&fit=crop', header: 'A staple in Indian cuisine, known for its unique texture and versatility.', details: { soil: 'Prefers well-drained, silty loam soil rich in organic matter.', watering: 'Needs consistent watering. Water deeply once a week, and more frequently in hot weather.', sunlight: 'Requires at least 6 hours of full, direct sunlight.', fertilization: 'Use compost at the time of planting and a balanced fertilizer every 4-6 weeks.', pest: 'Prone to fruit and shoot borer. Use pheromone traps and neem oil spray.' }, season: 'Kharif (Monsoon)', duration: '70-90 days', harvest: 'Harvest when the fruit\'s skin is glossy and smooth. Cut the fruit from the stem.', nutrition: 'Good source of dietary fiber, Vitamin B1, and copper. It also contains antioxidants like nasunin.' },
        { id: 'okra', type: 'crop', name: 'Okra (Bhindi)', image: 'https://images.unsplash.com/photo-1542365713-e7fc62nb83a0?q=80&w=2070&auto=format&fit=crop', header: 'A heat-loving vegetable, widely used in Indian cooking.', details: { soil: 'Fertile, well-drained soil is best. Can tolerate a range of soil types.', watering: 'Drought-tolerant, but consistent watering yields a better crop.', sunlight: 'Needs full sun and warm temperatures to thrive.', fertilization: 'Mix compost into the soil before planting.', pest: 'Watch for Yellow Vein Mosaic Virus. Choose resistant varieties.' }, season: 'Kharif & Zaid', duration: '45-65 days', harvest: 'Harvest pods when they are 2-3 inches long and tender.', nutrition: 'Rich in fiber, Vitamin C, and Vitamin K. Also a good source of folate and magnesium.' },
        { id: 'turmeric', type: 'crop', name: 'Turmeric (Haldi)', image: 'https://images.unsplash.com/photo-1591599182833-28959f635678?q=80&w=2070&auto=format&fit=crop', header: 'A rhizome famous for its medicinal properties and use as a spice.', details: { soil: 'Prefers well-drained, loamy or alluvial soils.', watering: 'Requires regular watering to keep the soil moist.', sunlight: 'Grows well in partial shade or filtered sunlight.', fertilization: 'Apply farmyard manure or compost before planting.', pest: 'Generally pest-resistant. Watch for rhizome rot in waterlogged soil.' }, season: 'Kharif', duration: '7-10 months', harvest: 'Harvest when leaves turn yellow and dry up. Dig up the rhizomes carefully.', nutrition: 'Contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties.' },
        { id: 'rice', type: 'crop', name: 'Rice (Chawal)', image: 'https://images.unsplash.com/photo-1536362432083-110f8a82441a?q=80&w=2070&auto=format&fit=crop', header: 'A staple food for a large part of the world\'s human population.', details: { soil: 'Clayey loam soils are ideal as they can hold water.', watering: 'Requires abundant water; fields are often flooded.', sunlight: 'Needs plenty of sunlight and high humidity.', fertilization: 'Requires nitrogen, phosphorus, and potassium.', pest: 'Common pests include stem borers and leafhoppers.' }, season: 'Kharif', duration: '90-120 days', harvest: 'Harvested when the grains turn golden yellow.', nutrition: 'A primary source of carbohydrates for energy. Brown rice offers more fiber and nutrients.' },
        { id: 'maize', type: 'crop', name: 'Maize (Makai)', image: 'https://images.unsplash.com/photo-1620146369512-58a237227c81?q=80&w=2070&auto=format&fit=crop', header: 'A versatile cereal grain used for food and animal feed.', details: { soil: 'Prefers deep, fertile, and well-drained loamy soils.', watering: 'Requires adequate water, especially during flowering.', sunlight: 'Needs full sun to grow properly.', fertilization: 'A heavy feeder, especially of nitrogen.', pest: 'Pests like corn earworm and stem borer can be a problem.' }, season: 'Kharif', duration: '60-100 days', harvest: 'Harvest sweet corn when silks have dried and kernels are milky.', nutrition: 'Good source of carbohydrates, fiber, vitamin C, and magnesium.' },
    ],
    rabi: [
        { id: 'tomato', type: 'crop', name: 'Tomato (Tamatar)', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1921&auto=format&fit=crop', header: 'A versatile and popular crop, perfect for salads, curries, and sauces.', details: { soil: 'Well-drained, sandy loam soil rich in organic matter. pH of 6.0-7.0.', watering: 'Keep soil consistently moist. Water deeply 2-3 times a week.', sunlight: 'Requires 6-8 hours of direct, full sunlight daily.', fertilization: 'Feed with a balanced liquid fertilizer every 2-3 weeks.', pest: 'Watch for aphids and whiteflies. Use a regular neem oil spray.' }, season: 'Rabi (Winter) and Summer', duration: '60-80 days', harvest: 'Harvest when fruits are firm and fully colored.', nutrition: 'Excellent source of Vitamin C, potassium, and antioxidants like Lycopene.' },
        { id: 'carrot', type: 'crop', name: 'Carrots (Gajar)', image: 'https://images.unsplash.com/photo-1590431306482-f700ee050c5b?q=80&w=2070&auto=format&fit=crop', header: 'A root vegetable, prized for its sweet flavor and crisp texture.', details: { soil: 'Loose, sandy, well-drained soil is essential to allow roots to grow straight.', watering: 'Keep the soil consistently moist to prevent roots from cracking.', sunlight: 'Prefers full sun but can tolerate some shade.', fertilization: 'Avoid too much nitrogen, which can cause hairy roots.', pest: 'Carrot rust fly is a common pest. Use row covers to protect plants.' }, season: 'Rabi (Winter)', duration: '70-80 days', harvest: 'Harvest when the roots have reached desired size. Loosen soil before pulling.', nutrition: 'A great source of beta carotene, fiber, vitamin K1, and potassium.' },
        { id: 'spinach', type: 'crop', name: 'Spinach (Palak)', image: 'https://images.unsplash.com/photo-1576045057995-568f588f21ea?q=80&w=1974&auto=format&fit=crop', header: 'A leafy green flowering plant native to central and western Asia.', details: { soil: 'Prefers well-drained, nutrient-rich soil with a neutral pH.', watering: 'Keep soil evenly moist. Water regularly, especially in dry weather.', sunlight: 'Grows best in full sun to light shade.', fertilization: 'A nitrogen-rich fertilizer promotes leafy growth.', pest: 'Aphids and leaf miners can be problematic.' }, season: 'Rabi (Winter)', duration: '40-50 days', harvest: 'Harvest outer leaves when large enough, allowing inner leaves to grow.', nutrition: 'Extremely nutrient-rich. Contains high amounts of vitamin K, vitamin A, iron, and calcium.' },
        { id: 'wheat', type: 'crop', name: 'Wheat (Gehu)', image: 'https://images.unsplash.com/photo-1507633698772-7c82669382b4?q=80&w=2070&auto=format&fit=crop', header: 'A cereal grain that is a worldwide staple food.', details: { soil: 'Well-drained loam or clay loam soils are best.', watering: 'Requires irrigation at critical stages of growth like flowering.', sunlight: 'Needs clear, sunny weather to grow well.', fertilization: 'Nitrogen, phosphorus, and potassium are key nutrients.', pest: 'Rusts and smuts are common diseases.' }, season: 'Rabi', duration: '100-120 days', harvest: 'Harvested when the stalks and heads have turned from green to yellow.', nutrition: 'A major source of carbohydrates. Whole wheat is a good source of fiber, selenium, and manganese.' },
        { id: 'mustard', type: 'crop', name: 'Mustard (Sarson)', image: 'https://images.unsplash.com/photo-1560089195-219a15f2a18d?q=80&w=2070&auto=format&fit=crop', header: 'Cultivated as an oil seed crop, a vegetable, or as fodder.', details: { soil: 'Grows well in light to heavy soils, but loamy soil is preferred.', watering: 'Requires timely irrigation for good yield.', sunlight: 'Needs a cool and dry climate with adequate sunlight.', fertilization: 'Responds well to sulfur in addition to N, P, and K.', pest: 'Aphids are a major pest of mustard.' }, season: 'Rabi', duration: '110-140 days', harvest: 'Harvest when pods turn yellow and seeds become hard.', nutrition: 'Mustard greens are an excellent source of vitamin K, vitamin A, and vitamin C.' },
    ],
    zaid: [
        { id: 'cucumber', type: 'crop', name: 'Cucumber (Kheera)', image: 'https://images.unsplash.com/photo-1591160690555-5deea17416fb?q=80&w=1974&auto=format&fit=crop', header: 'A widely-cultivated creeping vine plant that bears refreshing fruits.', details: { soil: 'Light, fertile, well-drained loamy soil is ideal.', watering: 'Needs plenty of water, especially during fruiting. Keep soil consistently moist.', sunlight: 'Requires full sun and warm weather.', fertilization: 'Feed with a balanced fertilizer when plants begin to vine.', pest: 'Powdery mildew and cucumber beetles are common problems.' }, season: 'Zaid (Summer)', duration: '50-70 days', harvest: 'Harvest frequently when cucumbers are of a usable size to encourage more production.', nutrition: 'Low in calories, high in water content, and a good source of vitamin K.' },
        { id: 'watermelon', type: 'crop', name: 'Watermelon (Tarbuj)', image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=2070&auto=format&fit=crop', header: 'A large, sweet fruit originally from southern Africa, perfect for summer.', details: { soil: 'Sandy loam soil that is rich in organic matter and well-drained is best.', watering: 'Reduce watering as fruit matures to increase sweetness.', sunlight: 'Needs long, hot, sunny days to produce sweet fruit.', fertilization: 'Use a fertilizer higher in phosphorus and potassium than nitrogen.', pest: 'Aphids and fungal diseases like powdery mildew can be issues.' }, season: 'Zaid (Summer)', duration: '80-100 days', harvest: 'Harvest when the tendril nearest the fruit stem is dry and brown.', nutrition: 'An excellent source of vitamin C, vitamin A, and the antioxidant lycopene.' },
        { id: 'pumpkin', type: 'crop', name: 'Pumpkin (Kaddu)', image: 'https://images.unsplash.com/photo-1509938215423-c7936166a01b?q=80&w=2070&auto=format&fit=crop', header: 'A versatile squash plant, used in sweet and savory dishes.', details: { soil: 'Prefers rich, fertile soil that is well-drained.', watering: 'Needs a lot of water. Water deeply, especially during hot weather.', sunlight: 'Requires full sun.', fertilization: 'A heavy feeder. Mix plenty of compost into the soil before planting.', pest: 'Squash bugs and powdery mildew can be problems.' }, season: 'Zaid and Kharif', duration: '90-120 days', harvest: 'Harvest when the pumpkin is a deep, solid color and the rind is hard.', nutrition: 'Highly nutritious and particularly rich in vitamin A, fiber, and potassium.' },
        { id: 'mint', type: 'crop', name: 'Mint (Pudina)', image: 'https://images.unsplash.com/photo-1629219379698-935f52824653?q=80&w=1932&auto=format&fit=crop', header: 'A fragrant herb known for its culinary and medicinal uses.', details: { soil: 'Prefers a rich, moist, and well-drained soil.', watering: 'Keep the soil consistently moist. Mint does not like to dry out.', sunlight: 'Grows well in full sun or partial shade.', fertilization: 'A light application of a balanced fertilizer once or twice is sufficient.', pest: 'Generally pest-free. Plant in containers to control its invasive spread.' }, season: 'Can be grown year-round.', duration: 'Harvest as soon as established.', harvest: 'Harvest leaves by snipping them off. Frequent harvesting encourages fuller growth.', nutrition: 'A good source of vitamin A, manganese, and iron. May help with indigestion.' },
        { id: 'bittergourd', type: 'crop', name: 'Bitter Gourd (Karela)', image: 'https://images.unsplash.com/photo-1607599204233-80352515b699?q=80&w=2070&auto=format&fit=crop', header: 'A tropical vine known for its bitter but healthy fruit.', details: { soil: 'Prefers sandy loam soils rich in organic matter.', watering: 'Needs regular watering to keep the soil moist.', sunlight: 'Requires a hot and humid climate with plenty of sunshine.', fertilization: 'Apply a balanced fertilizer during the growing season.', pest: 'Fruit flies can be a problem. Use fruit fly traps.' }, season: 'Zaid and Kharif', duration: '55-60 days', harvest: 'Harvest when the fruits are young and tender for best flavor.', nutrition: 'Rich in nutrients. It has several health benefits, including potentially lowering blood sugar.' },
    ]
};

export const faqData = [
    {
      question: "Why are my plant's leaves turning yellow?",
      answer: "Yellow leaves are most commonly caused by overwatering (which suffocates roots) or a nitrogen deficiency. First, check if the soil is soggy. If so, reduce watering frequency. If the soil seems fine, consider feeding your plant with a nitrogen-rich organic fertilizer like compost tea or vermicompost."
    },
    {
      question: "What are these tiny white insects on my brinjal plant?",
      answer: "Those are likely mealybugs or whiteflies. You can control them by spraying a solution of neem oil mixed with water and a few drops of liquid soap. Apply the spray in the evening to avoid burning the leaves and to protect beneficial pollinators. Repeat every few days until the pests are gone."
    },
    {
      question: "My seedlings are tall and thin. What should I do?",
      answer: "This is called 'legginess' and it's a clear sign that the seedlings are not getting enough light. They are stretching to find it. Move them to a location with more direct sunlight immediately. If growing indoors, place them closer to a window or supplement with a grow light."
    },
    {
      question: "My tomato plants are flowering, but not producing fruit. Why?",
      answer: "This is often a pollination issue, especially if temperatures are very high (above 32°C). Gently shake the flower clusters around midday to help distribute pollen. It can also be caused by a nutrient imbalance, specifically too much nitrogen, which promotes leaf growth over fruit production. Ensure you are using a balanced fertilizer."
    },
    {
      question: "What is this white powder on my pumpkin leaves?",
      answer: "That is most likely powdery mildew, a common fungal disease. To treat it organically, spray the affected leaves with a solution of 1 tablespoon of baking soda and a half teaspoon of liquid soap mixed in 1 gallon of water. Improve air circulation around the plant by pruning some leaves to prevent it from recurring."
    }
  ];

  export const modulesDataHome = [
    // ... same module data as before ...
    {
        id: 'soil-prep',
        type: 'module',
        title: 'The Foundation: Soil Preparation',
        description: 'Learn to create nutrient-rich soil using compost and natural fertilizers.',
        image: soilPre,
        detail: {
            header: 'Healthy soil is the single most important ingredient for a successful organic garden.',
            contentTitle: 'Key Principles',
            content: 'Creating fertile soil involves balancing three main areas: physical structure, chemical nutrients, and biological life. Organic methods focus on feeding the soil\'s ecosystem, which in turn feeds the plants.',
            stepsTitle: 'Step-by-Step Guide',
            steps: [
                'Test Your Soil: Understand your soil\'s pH and nutrient levels.',
                'Add Organic Matter: Mix in 2-3 inches of well-rotted compost or manure to improve structure and fertility.',
                'Aerate if Necessary: If soil is heavily compacted, use a broadfork to loosen it without destroying its structure.',
                'Apply Mulch: A layer of straw, wood chips, or leaves helps retain moisture, suppress weeds, and regulate soil temperature.'
            ]
        }
    },
    {
        id: 'pest-control',
        type: 'module',
        title: 'Natural Pest Control',
        description: 'Discover effective, chemical-free methods to protect your plants.',
        image: pestControl,
        detail: {
            header: 'Work with nature, not against it, to manage pests and keep your garden healthy.',
            contentTitle: 'Integrated Pest Management (IPM)',
            content: 'The goal is not to eliminate all insects, but to maintain a balanced ecosystem where pests are kept in check by their natural predators.',
            stepsTitle: 'Effective Techniques',
            steps: [
                'Companion Planting: Plant herbs like basil, marigold, and mint alongside vegetables to repel common pests.',
                'Beneficial Insects: Attract ladybugs, lacewings, and hoverflies by planting flowers like dill and yarrow.',
                'Neem Oil Spray: A solution of neem oil, water, and a drop of mild soap is a powerful organic insecticide and fungicide.',
                'Crop Rotation: Avoid planting the same crop in the same spot year after year to break pest life cycles.'
            ]
        }
    },
    {
        id: 'composting',
        type: 'module',
        title: 'Composting 101',
        description: 'Turn kitchen scraps into \'black gold\' for your garden.',
        image: compost,
        detail: {
            header: 'Turn your kitchen scraps and yard waste into nutrient-rich \'black gold\'.',
            contentTitle: 'Why Compost?',
            content: 'Composting reduces landfill waste, saves money on fertilizers, and improves your soil\'s health, structure, and ability to retain water.',
            stepsTitle: 'Getting Started',
            steps: [
                'Choose a Bin: Select a compost bin that suits your space, from tumblers to simple piles.',
                'Balance Greens and Browns: Layer nitrogen-rich "greens" (kitchen scraps, grass clippings) with carbon-rich "browns" (leaves, cardboard).',
                'Keep it Moist: The pile should be as damp as a wrung-out sponge.',
                'Turn Regularly: Aerating the pile every week or two speeds up decomposition.'
            ]
        }
    }
];
