import React, { useState, useCallback } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const ItemType = 'letter'

interface DraggableLetterProps {
  id: string;
  name: string;
}

const DraggableLetter: React.FC<DraggableLetterProps> = ({ id, name }) => {
  const [{isDragging}, drag] = useDrag({
    type: ItemType,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return (
    <p
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {name}
    </p>
  )
}

interface TriangleProps {
  id: number;
  handleDrop: (triangleId: number, item: {id: string}) => void;
  droppedLetterId: string | null;
  isCorrect: boolean;
}

const Triangle: React.FC<TriangleProps> = ({ id, handleDrop, droppedLetterId, isCorrect }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item: {id: string}) => handleDrop(id, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <div
      ref={drop}
      style={{ 
        width: 0,
        height: 0,
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '87px solid red',
        margin: '50px auto',
        position: 'relative',
      }}
    >
      {droppedLetterId && <p style={{position: 'absolute', top: '30px', margin: 0 , color: 'white'}}>{droppedLetterId}</p>}
    </div>
  )
}

const TriangleGame = () => {
  const [triangles, setTriangles] = useState<Array<{id: number, droppedLetterId: string | null, isCorrect: boolean}>>(
    Array.from({ length: 7 }, (_, i) => ({ id: i, droppedLetterId: null, isCorrect: false }))
  );

  const handleDrop = useCallback((triangleId: number, item: {id: string}) => {
    setTriangles(prevTriangles =>
      prevTriangles.map(t =>
        t.id === triangleId ? { ...t, droppedLetterId: item.id, isCorrect: item.id === 'A' } : t
      )
    );
  }, []);

  return (
    <div>
      <h1>Divide and Conquer</h1>
    <h3>let's take the example of writing a book.
<br/>
Task: Write a non-fiction book on the history of artificial intelligence (AI).
<br/>
use the table then drag and drop each letter in the pyramid in the way you see fit
</h3>

<table style={{margin: '20px auto', border: '1px solid white', width: '60%'}}>
        <tr>
          <th style={{border: '1px solid white', padding: '10px' , color : 'white'}}>Letter</th>
          <th style={{border: '1px solid white', padding: '10px', color : 'white'}}>Explanation</th>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>A</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Write the manuscript for the book.</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>B</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}> Edit and revise the manuscript. This includes proofreading for grammatical errors, ensuring facts are correct, and making sure the manuscript flows well.</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>C</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Conduct primary research, which includes interviewing AI experts and pioneers, visiting places of importance in AI history, etc.</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>D</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Write a non-fiction book on the history of artificial intelligence (AI).</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>E</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Conduct secondary research, which includes studying existing literature, books, articles, documentaries about AI history.</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>F</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Research the history of artificial intelligence</td>
        </tr>
        <tr>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>G</td>
          <td style={{border: '1px solid white', padding: '10px', color : 'white'}}>Write the first draft of the manuscript. This is the process of writing the chapters and sections of the book based on your research.</td>
        </tr>
      </table>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <DraggableLetter id='A' name='A' />
        <DraggableLetter id='B' name='B' />
        <DraggableLetter id='C' name='C' />
        <DraggableLetter id='D' name='D' />
        <DraggableLetter id='E' name='E' />
        <DraggableLetter id='F' name='F' />
        <DraggableLetter id='G' name='G' />
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {triangles.map((triangle) => (
          <div style={{ flexBasis: triangle.id < 1 ? '100%' : triangle.id < 3 ? '50%' : '25%' }}>
            <Triangle key={triangle.id} id={triangle.id} handleDrop={handleDrop} droppedLetterId={triangle.droppedLetterId} isCorrect={triangle.isCorrect} />
          </div>
        ))}
      </div>
    </div>
  )
}

const Triangles = () => (
  <DndProvider backend={HTML5Backend}>
    <TriangleGame />
  </DndProvider>
)

export default Triangles
