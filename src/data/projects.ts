export interface ProjectContent {
    type: 'image' | 'video';
    src: string;
    caption?: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    videoPreview?: string; // Optional GIF/Video for hover
    description: string;
    content: ProjectContent[];
    className?: string; // For grid layout control
}

export const projects: Project[] = [
    {
        id: 1,
        title: "NEON HORIZONS",
        category: "AUTOMOTIVE",
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop",
        description: "A high-octane chase sequence filmed entirely on FPV drones through the neon-lit streets of Tokyo.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 2,
        title: "VERTICAL LIMITS",
        category: "ARCHITECTURE",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        description: "Documenting the construction of the city's newest skyscraper from ground breaking to the topping out ceremony.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 3,
        title: "DESERT DUST",
        category: "EVENT",
        thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1000&auto=format&fit=crop",
        description: "Capturing the chaos and beauty of the annual Desert Rally. Dust, heat, and engines roaring at 100mph.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 4,
        title: "AQUA MOTION",
        category: "COMMERCIAL",
        thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop",
        description: "Underwater videography for a luxury resort campaign.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 5,
        title: "ALPINE RIDGE",
        category: "NATURE",
        thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
        description: "Chasing the ridge line at 12,000 feet. A test of endurance for both pilot and machine.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 6,
        title: "MIDNIGHT RUN",
        category: "AUTOMOTIVE",
        thumbnail: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop",
        description: "Underground street racing culture captured from the air.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 7,
        title: "CYBER CITY",
        category: "URBAN",
        thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop",
        description: "A futuristic look at modern metropolis density.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1000&auto=format&fit=crop' }
        ]
    },
    {
        id: 8,
        title: "HUMAN ELEMENT",
        category: "LIFESTYLE",
        thumbnail: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
        description: "Surfing the biggest waves of the season.",
        content: [
            { type: 'image', src: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop' }
        ]
    }
];

export const projectCategories = ["ALL", "AUTOMOTIVE", "ARCHITECTURE", "NATURE", "URBAN", "EVENT"];
