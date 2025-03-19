import React, { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "TAB"; // 定義拖拽類型

const DraggableTab = ({ tab, index, moveTab }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTab(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-2 border ${isDragging ? "opacity-50" : "bg-white"} cursor-pointer`}
    >
      {tab}
    </div>
  );
};

const TabsContainer = () => {
  const [tabs, setTabs] = useState(["Tab 1", "Tab 2", "Tab 3", "Tab 4"]);

  const moveTab = useCallback((fromIndex, toIndex) => {
    const updatedTabs = [...tabs];
    const [movedTab] = updatedTabs.splice(fromIndex, 1);
    updatedTabs.splice(toIndex, 0, movedTab);
    setTabs(updatedTabs);
  }, [tabs]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-2 p-4 bg-gray-100">
        {tabs.map((tab, index) => (
          <DraggableTab key={tab} index={index} tab={tab} moveTab={moveTab} />
        ))}
      </div>
    </DndProvider>
  );
};

export default TabsContainer;
