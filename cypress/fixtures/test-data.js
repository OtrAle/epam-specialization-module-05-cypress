export const priceSliderScenarios = [
    {
        scenario: 'Lower Boundary',
        min: 0,
        max: 50
    },
    {
        scenario: 'Upper Boundary',
        min: 150,
        max: 200
    },
    {
        scenario: 'Just Inside Boundaries',
        min: 1,
        max: 199
    },
    {
        scenario: 'Single Point Boundary',
        min: 100,
        max: 100
    },
    {
        scenario: 'Mid-Range',
        min: 40,
        max: 160
    }
];

export const sortOptions = [
    'name,asc',
    'name,desc',
    'price,desc',
    'price,asc',
    'co2_rating,asc',
    'co2_rating,desc'
];

export const paginationData = [
    {
        scenario: 'Navigate forward from first page',
        currentPage: 1,
        arrow: 'next',
        targetPage: 2
    },
    {
        scenario: 'Navigate backward from last page',
        currentPage: 5,
        arrow: 'previous',
        targetPage: 4
    }
];

export const filters = [
    'Hammer',
    'ForgeFlex Tools',
    'Show only eco-friendly products'
];

export const filterParents = [
    {
        parent: 'Hand Tools',
        children: ['Hammer', 'Hand Saw', 'Wrench', 'Screwdriver', 'Pliers', 'Chisels', 'Measures']
    },
    {
        parent: 'Power Tools',
        children: ['Grinder', 'Sander', 'Saw', 'Drill']
    },
    {
        parent: 'Other',
        children: ['Tool Belts', 'Storage Solutions', 'Workbench', 'Safety Gear', 'Fasteners']
    }
];