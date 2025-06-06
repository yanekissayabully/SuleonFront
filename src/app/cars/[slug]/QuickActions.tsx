"use client";
import { useState } from "react"
import { Heart,Share2, } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuickActions() {


    const [isFavorite, setIsFavorite] = useState(false);
    return(
        <>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={isFavorite ? "text-red-500 border-red-300" : ""}
                      >
                        <Heart
                          className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
                        />
                        {isFavorite ? "В избранном" : "В избранное"}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Поделиться
                      </Button>
                    </div></>
    );
}