import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Mock data for fallback
const MOCK_REVIEWS = [
    {
        author_name: "Sarah Johnson",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Bali Help made our PT PMA registration incredibly smooth. Professional, responsive, and clear about all requirements. Highly recommend for any foreign investor!",
        profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        author_name: "Michael Chen",
        rating: 5,
        relative_time_description: "1 month ago",
        text: "Excellent service for business licensing. They handled our NIB and OSS registration efficiently. Very knowledgeable about local regulations.",
        profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
        author_name: "Emma Wilson",
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "The best experience for company formation in Bali. Transparent pricing and great communication throughout. They even helped with our corporate bank account.",
        profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
        author_name: "David Smith",
        rating: 4,
        relative_time_description: "4 months ago",
        text: "Very professional team. They helped us navigate the complex Indonesian business environment with ease. A solid choice for business setup in Bali.",
        profile_photo_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
];

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    let placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    console.log('Google Reviews API Request:', {
        hasApiKey: !!apiKey,
        placeId,
        placeIdType: placeId?.startsWith('ChIJ') ? 'standard' : (placeId?.startsWith('http') ? 'url' : 'other')
    });

    if (!apiKey || !placeId) {
        return NextResponse.json({
            success: true,
            data: MOCK_REVIEWS,
            is_mock: true,
            debug_message: 'Missing configuration'
        });
    }

    // Handle URL instead of Place ID
    if (placeId.startsWith('http')) {
        console.warn('Google Reviews API: Place ID is a URL, which is not supported.');
        return NextResponse.json({
            success: true,
            data: MOCK_REVIEWS,
            is_mock: true,
            debug_message: 'Place ID cannot be a URL'
        });
    }

    try {
        let url = '';
        // If it looks like a decimal CID (all numbers)
        if (/^\d+$/.test(placeId)) {
            url = `https://maps.googleapis.com/maps/api/place/details/json?cid=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
        } else {
            url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
        }

        console.log('Fetching Google Reviews from:', url.replace(apiKey, 'REDACTED'));

        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 'OK') {
            console.error('Google Places API Error:', {
                status: data.status,
                errorMessage: data.error_message,
                url: url.replace(apiKey, 'REDACTED')
            });
            return NextResponse.json({
                success: false,
                status: data.status,
                message: data.error_message || 'Google API error',
                is_mock: true,
                data: MOCK_REVIEWS
            });
        }

        return NextResponse.json({
            success: true,
            data: data.result.reviews || MOCK_REVIEWS,
            rating: data.result.rating,
            user_ratings_total: data.result.user_ratings_total,
            is_mock: false
        });
    } catch (error: any) {
        console.error('Error fetching Google reviews:', error);
        return NextResponse.json({
            success: true,
            data: MOCK_REVIEWS,
            is_mock: true,
            error: error.message
        });
    }
}
