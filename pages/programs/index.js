import LayoutPageList from '../../components/layouts/LayoutPageList';

export default function ProgramsPage() {
    return (
        <LayoutPageList
            headTitle="Программы"
            links={[
                { link: "/programs/githubBattle", name: "Github battle" },
            ]}
        />
    )
}