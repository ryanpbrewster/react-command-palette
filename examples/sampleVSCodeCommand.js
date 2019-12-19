import React from "react";
import "./sampleVSCodeCommand.css";

export default function sampleVSCodeCommand(suggestion) {
  const { name, highlight, shortcut, category } = suggestion;
  let shortcutsArray = [];
  if (typeof shortcut !== 'undefined') {
    shortcutsArray = shortcut.toString().split(" ") || "";
  }
  return (
    <div className="vscode-item">
      <span className={`vscode-category vscode-${category || "hidden"}`}>{category}</span>
      {highlight ? (
        <span className="vscode-name" dangerouslySetInnerHTML={{ __html: highlight }} />
      ) : (
        <span className="vscode-name">{name}</span>
      )}
      <kbd className="vscode-shortcut">
        {shortcutsArray.map(item => {
          return <span className="vscode-shortcut-part">{item}</span>;
        })}
      </kbd>
    </div>
  );
}