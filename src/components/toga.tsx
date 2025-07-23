"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Leaf, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toga } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

export function Toga() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = toga.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.uses.some((use) =>
        use.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="md:text-2xl text-base font-bold text-gray-900">
                  Katalog Tanaman Obat
                </h1>
                <p className="text-gray-600">Koleksi tanaman obat</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Cari tanaman obat..."
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Plant Catalog */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <Link href={`/tanaman/${plant.id}`} key={plant.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer pt-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {plant.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {plant.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      Kegunaan:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {plant.uses.map((use, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-green-200 text-green-700 hover:bg-green-50"
                        >
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPlants.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada tanaman obat yang ditemukan untuk "{searchTerm}"
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Coba gunakan kata kunci yang berbeda
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
              <Leaf className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">
                Peringatan Penting
              </h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Informasi dalam katalog ini hanya untuk tujuan edukasi.
                Konsultasikan dengan dokter atau ahli herbal sebelum menggunakan
                tanaman obat untuk pengobatan. Penggunaan yang tidak tepat dapat
                menimbulkan efek samping yang tidak diinginkan.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
