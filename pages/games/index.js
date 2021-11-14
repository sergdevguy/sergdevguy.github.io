import LayoutPageList from '../../components/layouts/LayoutPageList';

export default function GamesPage() {
    return (
        <LayoutPageList
            headTitle="Игры"
            links={[
                { link: "/games/boxmen", name: "Boxmen" },
                { link: "/games/snake", name: "Змейка" },
            ]}
        />
    )
}