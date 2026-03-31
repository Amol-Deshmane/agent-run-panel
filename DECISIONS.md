# 🧠 Design Decisions

## 1. Agent Thoughts

Agent thoughts are hidden by default to avoid overwhelming non-technical users. They can be exposed in future as an optional debug mode.

## 2. Parallel Task Layout

Parallel tasks are grouped horizontally using a grid layout. This visually communicates simultaneous execution clearly.

## 3. Partial Outputs

Partial outputs are shown inline as they arrive to provide transparency and a real-time feel.

## 4. Cancelled State

Cancelled tasks are styled neutrally (gray) and labeled “Stopped early” to avoid confusion with failures.

## 5. Task Dependencies

Dependencies are handled implicitly through ordering rather than visual graphs to keep UI simple and readable.
