import { Project } from "@/app/api/projects/route";

/**
 * @description Komponen ini adalah "Spesialis Desain".
 * Tugasnya sangat spesifik: menerima SATU objek 'project' dan menampilkannya sebagai kartu.
 * Ia tidak tahu tentang daftar, looping, atau dari mana data berasal.
 * Ia hanya ahli dalam mengubah satu 'Project' menjadi HTML.
 */

// 'Props' mendefinisikan "kontrak" untuk komponen ini.
// Kontraknya adalah: "Anda harus memberi saya satu properti bernama 'project', dan itu harus bertipe 'Project'."
interface Props {
    project: Project;
}

const Card = ({ project }: Props) => {
    return (
       <div className={"max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-6 flex flex-col"}>
           <div className="flex-grow">
               {/* Menggunakan data dari objek 'project' yang diterima melalui props */}
               <div className="font-bold text-xl mb-2">{project.name}</div>
               <p className="text-gray-700 text-base">
                   {project.description}
               </p>
           </div>
           <div className="px-6 pt-4 pb-2">
               <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                   Lihat Proyek
               </a>
           </div>
       </div>
    );
};

export default Card;
