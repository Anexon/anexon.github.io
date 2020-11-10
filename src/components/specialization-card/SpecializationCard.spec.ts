import SpecialiationCard from './SpecializationCard';
import TestRenderer from 'react-test-renderer';

it('Renders correctly', () => {
    const card = TestRenderer.create(SpecialiationCard({
        imgUrl: "una url",
        title: "Título",
        description: "Descripción",
        isHighlighted: false
    })).toJSON();
    expect(card).toMatchSnapshot();
})