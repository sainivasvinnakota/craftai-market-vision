
import { AnalysisResultData } from "@/components/AnalysisResult";

const mockResults: Record<string, AnalysisResultData> = {
  "pottery": {
    productType: "Terracotta Pottery",
    technique: "Traditional Hand-Thrown Pottery",
    skillLevel: "Intermediate",
    skillPercent: 65,
    steps: [
      "Start with clay preparation by wedging to remove air bubbles",
      "Center the clay on a pottery wheel",
      "Open the clay and pull up the walls to form the basic shape",
      "Shape the pot using hands and pottery tools",
      "Let the piece dry to leather-hard state, then trim excess clay",
      "Decorate with carved patterns or added elements",
      "Allow to fully dry before bisque firing in a kiln",
      "Apply glaze and fire again for final finish"
    ],
    materials: [
      "Terracotta clay (red clay)",
      "Pottery wheel",
      "Pottery tools (wire cutters, ribs, needles)",
      "Water container",
      "Sponges",
      "Kiln access",
      "Glazes (optional)"
    ],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com/c/home-and-living/home-decor/decorative-objects/pottery" },
      { name: "Amazon Karigar", url: "https://www.amazon.com/handmade/pottery" },
      { name: "Flipkart Samarth", url: "https://www.flipkart.com/craft-pottery" }
    ],
    tutorialLink: "https://www.youtube.com/watch?v=aNkz9PDtGPg"
  },
  "textile": {
    productType: "Block Printed Textile",
    technique: "Traditional Block Printing",
    skillLevel: "Beginner",
    skillPercent: 40,
    steps: [
      "Prepare your cloth by washing and ironing it smooth",
      "Create or purchase wooden blocks with carved designs",
      "Mix fabric paints in desired colors",
      "Apply paint to the block using a tray or pad",
      "Press the block firmly onto the fabric in a planned pattern",
      "Allow the print to dry completely",
      "Heat set the design using an iron or dryer",
      "Finish edges as desired for final product"
    ],
    materials: [
      "Natural fabric (cotton, linen, or silk)",
      "Wooden printing blocks",
      "Fabric paint or natural dyes",
      "Paint tray or pad",
      "Iron",
      "Workspace with flat surface"
    ],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com/c/craft-supplies-and-tools/fabric/printed-fabric" },
      { name: "Amazon Karigar", url: "https://www.amazon.com/handmade/textiles" },
      { name: "Indiamart", url: "https://www.indiamart.com/block-printed-fabrics" }
    ],
    tutorialLink: "https://www.youtube.com/watch?v=zGxRZb0d3E4"
  },
  "jewelry": {
    productType: "Beaded Jewelry",
    technique: "Traditional Beadwork",
    skillLevel: "Beginner",
    skillPercent: 35,
    steps: [
      "Design your jewelry piece on paper",
      "Select beads, findings, and stringing material",
      "Cut wire or thread to desired length plus extra for finishing",
      "Arrange beads in planned pattern before stringing",
      "String beads following your design",
      "Add clasps or closures",
      "Secure ends with crimps or knots",
      "Trim excess wire or thread"
    ],
    materials: [
      "Beads (glass, wood, ceramic, or metal)",
      "Stringing material (wire, thread, or elastic)",
      "Findings (clasps, jump rings)",
      "Jewelry pliers",
      "Wire cutters",
      "Bead board or mat"
    ],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com/c/jewelry/beaded" },
      { name: "Amazon Handmade", url: "https://www.amazon.com/handmade/jewelry" },
      { name: "Folksy", url: "https://folksy.com/categories/jewellery" }
    ],
    tutorialLink: "https://www.youtube.com/watch?v=F_bH_wDvXxc"
  },
  "woodwork": {
    productType: "Carved Wooden Figurine",
    technique: "Traditional Woodcarving",
    skillLevel: "Advanced",
    skillPercent: 85,
    steps: [
      "Select appropriate wood type and prepare a block",
      "Transfer your design onto the wood",
      "Use gouges to remove large areas of wood",
      "Refine the shape using various carving tools",
      "Add detailed features with fine carving tools",
      "Sand the piece gradually using progressively finer sandpaper",
      "Apply finish (oil, wax, or varnish)",
      "Allow finish to cure completely"
    ],
    materials: [
      "Carving wood (basswood, walnut, oak)",
      "Woodcarving tools (gouges, knives, chisels)",
      "Mallet",
      "Sandpaper (various grits)",
      "Finishing oil or wax",
      "Protective gloves",
      "Clamps or vise"
    ],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com/c/home-and-living/home-decor/decorative-objects/carvings" },
      { name: "Amazon Karigar", url: "https://www.amazon.com/handmade/woodwork" },
      { name: "Novica", url: "https://www.novica.com/wood-sculptures/" }
    ],
    tutorialLink: "https://www.youtube.com/watch?v=AlIr95-3Imw"
  },
  "default": {
    productType: "Handcrafted Item",
    technique: "Traditional Crafting",
    skillLevel: "Intermediate",
    skillPercent: 60,
    steps: [
      "Research the specific craft technique",
      "Gather appropriate materials and tools",
      "Practice basic skills needed for the craft",
      "Start with simple projects before advancing",
      "Join online communities to learn from others",
      "Document your process for improvement",
      "Refine and perfect your technique",
      "Create your own unique designs"
    ],
    materials: [
      "Varies by specific craft type",
      "Basic tools for the craft category",
      "Quality raw materials",
      "Reference materials or patterns",
      "Workspace appropriate to the craft"
    ],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com/c/craft-supplies-and-tools" },
      { name: "Amazon Handmade", url: "https://www.amazon.com/handmade" },
      { name: "Flipkart", url: "https://www.flipkart.com/craft" }
    ]
  }
};

// Function to simulate AI image analysis with random delays
export const analyzeImage = (imageFile: File): Promise<AnalysisResultData> => {
  return new Promise((resolve) => {
    // Simulate processing time
    const processingTime = Math.random() * 2000 + 1000; // 1-3 seconds
    
    setTimeout(() => {
      // Simulate random analysis result based on file name
      const fileName = imageFile.name.toLowerCase();
      
      // Determine which mock result to use
      let resultType = "default";
      if (fileName.includes("pot") || fileName.includes("clay") || fileName.includes("ceramic")) {
        resultType = "pottery";
      } else if (fileName.includes("fabric") || fileName.includes("cloth") || fileName.includes("textile") || fileName.includes("print")) {
        resultType = "textile";
      } else if (fileName.includes("bead") || fileName.includes("jewelry") || fileName.includes("necklace") || fileName.includes("bracelet")) {
        resultType = "jewelry";
      } else if (fileName.includes("wood") || fileName.includes("carv") || fileName.includes("figure")) {
        resultType = "woodwork";
      }
      
      resolve(mockResults[resultType]);
    }, processingTime);
  });
};
