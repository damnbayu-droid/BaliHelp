'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Review {
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    profile_photo_url: string;
}

const ReviewCard = ({ review }: { review: Review }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongReview = review.text.length > 150;

    return (
        <Card className="h-full p-5 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            fill
                            className="rounded-full object-cover bg-slate-100 dark:bg-slate-800"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{review.author_name}</h4>
                        <div className="flex items-center gap-1.5">
                            <div className="flex" aria-label={`${review.rating} out of 5 stars`}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-2.5 h-2.5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                                ))}
                            </div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{review.relative_time_description}</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Quote className="w-6 h-6 text-purple-100 dark:text-purple-900/20 absolute -top-2 -left-1 -z-0" />
                    <p className={`text-slate-600 dark:text-slate-300 text-xs leading-relaxed relative z-10 italic ${!isExpanded && isLongReview ? 'line-clamp-4' : ''}`}>
                        "{review.text}"
                    </p>
                    {isLongReview && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-[10px] font-semibold text-purple-600 dark:text-purple-400 mt-2 hover:underline focus:outline-none relative z-20"
                            aria-expanded={isExpanded}
                        >
                            {isExpanded ? 'Read Less' : 'Read More...'}
                        </button>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default function GoogleReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [totalRating, setTotalRating] = useState<number | null>(null);
    const [totalReviews, setTotalReviews] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMock, setIsMock] = useState(false);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('/api/reviews');
                const result = await response.json();

                if (result.success) {
                    setReviews(result.data);
                    setTotalRating(result.rating);
                    setTotalReviews(result.user_ratings_total);
                    setIsMock(result.is_mock);
                }
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchReviews();
    }, []);

    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const googleMapsUrl = 'https://maps.app.goo.gl/oXdNgGtQXKKQcWjS7';

    if (isLoading) {
        return (
            <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="h-48 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950/50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <Badge className="mb-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 hover:bg-purple-100">
                            Testimonials
                        </Badge>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            What Our Clients Say
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-300">
                            Don't just take our word for it. Hear from the business owners we've helped establish in Bali.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-1">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(totalRating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                                ))}
                            </div>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">{totalRating || '5.0'}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Based on {totalReviews || '150+'} Google Reviews
                        </p>
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                        >
                            View all reviews <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {reviews.map((review, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_40%] lg:flex-[0_0_28%] px-2">
                                    <ReviewCard review={review} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 h-8 w-8 rounded-full bg-white dark:bg-slate-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
                        onClick={scrollPrev}
                        aria-label="Previous review"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 h-8 w-8 rounded-full bg-white dark:bg-slate-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
                        onClick={scrollNext}
                        aria-label="Next review"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="mt-10 text-center">
                    <Button
                        size="default"
                        variant="outline"
                        className="rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm"
                        onClick={() => window.open(googleMapsUrl, '_blank')}
                    >
                        Review Us on Google
                    </Button>
                </div>
            </div>
        </section>
    );
}
