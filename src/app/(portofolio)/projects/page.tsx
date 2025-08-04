import Card from "@/app/components/Card";
import { Project,Anime } from "@/app/api/projects/route";
import List from "@/app/components/List";
import AnimeCard from "@/app/components/AnimeCard";

/**
 * @description Halaman ini bertindak sebagai "Arsitek".
 * Tugasnya adalah:
 * 1. Mengambil data (menjadi "mandor" yang mendapatkan bahan baku).
 * 2. Mendelegasikan tugas rendering daftar ke komponen <List> ("Pekerja Pabrik").
 * 3. Memberikan instruksi yang jelas kepada <List> tentang cara merender setiap item.
 */

const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const getAnime =async  ():Promise<Anime[]>=>{
    const res = await fetch(`https://api.jikan.moe/v4/characters`,{
        cache:"no-store"
    })
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    const data = await res.json();
    return data.data; // Mengambil hanya bagian 'data' dari respons JSON
}

const ProjectsPage = async () => {
  // 1. Arsitek mendapatkan "bahan baku" (data proyek).
  const projects = await getProjects();
const animefetch = await getAnime();
    console.log(animefetch)
  return (
    <main className={"flex min-h-screen flex-col items-center p-24"}>
      <h1 className="text-4xl font-bold">Proyek Saya</h1>
      <p className="mt-4 text-lg max-w-2xl text-center">
        Berikut adalah beberapa proyek yang pernah saya kerjakan. Setiap proyek
        menunjukkan skill dan teknologi yang saya kuasai.
      </p>
      <div className="flex flex-wrap justify-center">
        {/* 2. Arsitek memanggil "Pekerja Pabrik" (<List>) dan memberinya instruksi. */}
        <List<Project> // Secara eksplisit memberitahu <List> bahwa kita bekerja dengan tipe 'Project'.
          
          // Memberikan "bahan baku" ke <List>.
          items={projects}
          
          // Memberikan "Buku Panduan Desain": Cara mengubah satu 'project' menjadi sebuah <Card>.
          renderItem={(project) => <Card project={project} />}
          
          // Memberikan "Buku Panduan Penomoran": Cara mendapatkan ID unik dari setiap 'project'.
          getKey={(project) => project.id}
        />
      </div>
        <>
            <List<Anime> items={animefetch} renderItem={item => <AnimeCard project={item}/>} getKey={item => item.mal_id}/>
        </>
    </main>
  );
};

export default ProjectsPage;
