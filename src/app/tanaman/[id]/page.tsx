import { getPlantById, getAllPlants } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Leaf,
  AlertTriangle,
  Beaker,
  BookOpen,
  MapPin,
  TreePine,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface PlantPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const plants = getAllPlants();
  return plants.map((plant) => ({
    id: plant.id.toString(),
  }));
}

export default async function PlantPage({ params }: PlantPageProps) {
  const { id } = await params;
  const plant = getPlantById(Number.parseInt(id));

  if (!plant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Katalog
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Plant Header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {plant.name}
                </h1>
                <p className="text-lg text-gray-600 italic mb-4">
                  {plant.latinName}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {plant.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{plant.origin}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TreePine className="h-4 w-4" />
                    <span>{plant.family}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    Kegunaan Utama:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {plant.uses.map((use, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-green-200 text-green-700 hover:bg-green-50"
                      >
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Detailed Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Deskripsi Lengkap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {plant.detailedDescription}
                </p>
              </CardContent>
            </Card>

            {/* Active Compounds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Beaker className="h-5 w-5 text-green-600" />
                  Senyawa Aktif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {plant.activeCompounds.map((compound, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700"
                    >
                      {compound}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preparation and Precautions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Preparation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Cara Pengolahan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plant.preparation.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Precautions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Peringatan & Efek Samping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plant.precautions.map((precaution, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{precaution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  Peringatan Medis
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Informasi ini hanya untuk tujuan edukasi dan tidak
                  menggantikan saran medis profesional. Selalu konsultasikan
                  dengan dokter atau ahli herbal yang qualified sebelum
                  menggunakan tanaman obat untuk pengobatan, terutama jika Anda
                  sedang hamil, menyusui, atau memiliki kondisi medis tertentu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
