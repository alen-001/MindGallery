import React from 'react'
import Card from './Card'
function CardArray() {
  const notes = [
    {
      id: 1,
      title: 'Stepper Motor',
      content: "A stepper motor works by converting electrical pulses into precise mechanical motion. The motor's main components are: Stator The stationary part of the motor with coils of wire that create magnetic fields. Rotor The rotating part of the motor that has teeth or magnetic poles that interact with the stator to produce motion. Here's how a stepper motor works: Energize a phase: A current flows through the stator's coil to create a magnetic field. Align the rotor: The rotor aligns with the magnetic field. Rotate the rotor: By energizing different phases in sequence, the rotor rotates by a specific amount to reach the desired position. Repeat: The process is repeated, with each partial rotation called a step. The order and timing of the electrical pulses determines the direction and distance of each step. There are several methods for energizing the windings, including full step, half-step, and micro stepping. Stepper motors are highly controllable because each rotation follows an exact angle. They can be used in open loop control, where position is calculated by step counts, or in closed loop control, which uses feedback for higher accuracy",
      color: 'Red',
      tag: 'Red'

    },
    {
      id: 2,
      title: 'Note 2',
      content: 'Note2 Content',
      color: 'Blue',
      tag: 'Blue'

    },
    {
      id: 3,
      title: 'Note 3',
      content: 'Note3 Content',
      color: 'Green',
      tag: 'Green'

    },
    {
      id: 4,
      title: 'Note 4',
      content: 'Note4 Content',
      color: 'Yellow',
      tag: 'Yellow'
    },
    {
        id: 5,
        title: 'Note 5',
        content: 'Note5 Content',
        color: 'Purple',
        tag: 'Purple'

    },
    {
        id: 6,
        title: 'Note 6',
        content: 'Note6 Content',
        tag: 'Pink',
        tag: 'Pink'
    }
  ]

return (
    <div className="flex items-center justify-center w-full h-full">
        {/* Scrollable container */}
        <div className="flex overflow-x-scroll space-x-4 p-4 snap-x snap-mandatory scroll-p-4" style={{width:'70%', msScrollbarBaseColor:'transparent', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <style>
                {`
                    .flex::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>

            {notes.map((note) => (
                <div className="flex-shrink-0 snap-center " key={note.id}>
                    <Card title={note.title} content={note.content} tag={note.tag} color={note.color} />
                </div>
            ))}
        </div>
    </div>
)
}

export default CardArray
