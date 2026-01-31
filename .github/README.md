# Slipe Online - Strategic Board Game Simulator

A web-based implementation of **Slipe**, a tactical board game focused on spatial reasoning and flanking mechanics. Built with **React**, this project demonstrates complex grid-based logic, state normalization, and custom move-validation algorithms.

## 🕹 The Game: What is "Slipe"?
Slipe is a strategy game played on a 5x5 grid.
- **Victory Condition:** Capture the opponent's "Star Piece" (King) by flanking it.
- **Unique Movement:** Unlike Chess, pieces in Slipe slide in a straight line until they hit an obstacle or the edge of the board, requiring players to think several steps ahead.

## 🚀 Key Technical Features

### 1. Directional Sliding Algorithm
Implemented a "Slide-to-Edge" mechanic where the destination is dynamically calculated based on the board's boundaries and existing obstacles. This involves real-time grid traversal logic to determine the valid stopping point in any of the 4 cardinal directions.

### 2. Two-Phase Move Validation
To ensure a smooth User Experience (UX), I developed a robust validation system:
- **Phase 1 (Selection):** Filters and validates piece selection based on the current player's turn and piece ownership.
- **Phase 2 (Targeting):** Dynamically calculates available destination cells (up to 4 directions) and prevents invalid moves (e.g., moves that would violate the "Star Piece" protection rules).

### 3. Normalized State Management (Architecture)
Refactored the data structure from a "Cell-centric" approach to a **Normalized Piece-Cell Relationship**.
- **The Problem:** Storing piece data inside cell objects made it difficult to track specific pieces (like the Star Piece) and caused inefficient re-renders.
- **The Solution:** Decoupled Piece and Cell objects, assigning unique IDs to each. This improved performance and made the "Star Piece" detection logic significantly more maintainable.

### 4. Hint & Visual Feedback System
- **Real-time Hints:** Visual indicators to show valid moves upon selecting a piece.
- **Dynamic Messaging:** Context-aware status messages that guide the user through the turn-based flow.

## 🛠 Tech Stack
- **Frontend:** React (Hooks, Functional Components)
- **Styling:** CSS Modules (Supports dynamic themes like "Ice Stage")
- **Logic:** Custom JavaScript Rule Engine

## 📂 Component Architecture
- `Game`: Orchestrates the global state and turn-based flow.
- `Board`: A stateless grid renderer (5x5) handling layout and center-point markers.
- `Piece`: A dynamic component representing individual units, their types, and "Star" status.
- `RuleEngine`: A decoupled module containing the pure logic for movement and win-conditions.
- `Config`: Manages initial setup, themes, and board initialization.

## 🚧 Roadmap & Future Improvements
- [ ] **Animations:** Implement smooth sliding transitions using Framer Motion.
- [ ] **PWA Support:** Make the game playable offline.
- [ ] **AI Opponent:** Implement a basic Minimax algorithm for single-player mode