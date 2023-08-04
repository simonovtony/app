
import { NextResponse } from 'next/server'
 
export async function GET() {
  const data = {
    description: 'This is where a detailed scraped description would appear in a glean or collection. If it gets too long, it will start to fade out so that editors can think free and edit the text if needed.',
    collections: [
      'Test',
      'Detailed',
      'Dance',
      'Design',
      'UX',
    ],
  };
 
  return NextResponse.json(data)
}