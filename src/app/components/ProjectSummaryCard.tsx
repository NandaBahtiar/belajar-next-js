import { Project } from "@/app/api/projects/route";

// 1. Definisikan tipe untuk props komponen ini menggunakan Pick.
// Kita hanya "mengambil" properti 'title' dan 'description' dari tipe Project.
// Konvensi penamaan menggunakan PascalCase (cth: ProjectSummaryProps).
type ProjectSummaryProps = Pick<Project, 'name' | 'description'>;

// 2. Komponen ini sekarang menerima satu prop bernama 'project' dengan tipe yang baru kita buat.
const ProjectSummaryCard = ({ project }: { project: ProjectSummaryProps }) => {
    return (
        <div className="p-4 my-2 border rounded-lg shadow-sm bg-gray-50 w-full max-w-md mx-auto">
            {/* 3. Tampilkan data dari props yang diterima */}
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="text-gray-600">{project.description}</p>
        </div>
    );
};

export default ProjectSummaryCard;