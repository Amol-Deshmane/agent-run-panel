# 🚀 Agent Run Panel

A real-time UI for visualizing multi-agent AI workflows — built as part of the JcurveIQ Frontend Engineer assessment.

---

## 🧠 Overview

This project simulates an AI research system where a coordinator agent breaks down a query into multiple tasks, executes them in parallel, handles failures, and synthesizes a final output.

The UI allows users to **watch the run unfold in real-time**, improving transparency and trust.

---

## ✨ Features

* 🔄 Real-time event simulation (mock emitter)
* 📋 Task lifecycle visualization (running, complete, failed, cancelled)
* ⚡ Parallel task grouping
* 🔁 Failure and retry handling
* 🧩 Partial outputs streaming
* 🧠 Agent thought handling (optional)
* 🧭 Timeline view for execution flow
* ⭐ Prominent final output display
* 🎬 Smooth animations (Framer Motion)

---

## 🎨 UI Design Highlights

* High-contrast dark theme for readability
* Color-coded task statuses:

  * 🟦 Running
  * 🟩 Complete
  * 🟥 Failed
  * ⚪ Cancelled (neutral)
* Clean information hierarchy
* Responsive layout

---

## 🏗 Tech Stack

* React (Hooks)
* Vite
* Tailwind CSS
* Framer Motion

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

---

## 🔁 Switching Fixtures

To switch between success and error scenarios:

Edit `App.jsx`:

```js
import data from "./mock/fixtures/run_error.json";
```

---

## ⚠️ Known Limitations

* No backend (mock-only implementation)
* Dependency graph not visually rendered (implicit ordering used)
* Agent thoughts not fully exposed in UI (design decision)

---

## 💡 Future Improvements

* Dependency graph visualization
* Streaming text animation
* Collapsible agent thought panel
* Performance optimization for large task sets

---

## 🧠 Reflection

The most challenging part was designing a UI that makes **parallel execution and cancellation states intuitive without overwhelming the user**.

One improvement to the event schema would be adding **explicit retry identifiers** to better track retry attempts in the UI.
