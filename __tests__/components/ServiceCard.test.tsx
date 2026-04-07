import { render, screen } from '@testing-library/react';
import ServiceCard from '../../components/ServiceCard';

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(<ServiceCard title="Test" description="Desc" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Desc')).toBeInTheDocument();
  });
});
