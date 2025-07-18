# BiteSpeed Frontend Task: Chatbot Flow Builder

## 🌐 Live Demo
👉 [View the deployed app here](https://your-deployment-url.com)  
👉 [GitHub Repository](https://github.com/devopslayer/cbflow)

---

## 🧠 Overview

This is a simple **Chatbot Flow Builder** built using **React** and **React Flow**. It allows users to visually create chatbot flows by connecting different message nodes.

> A chatbot flow is constructed by connecting multiple message nodes, determining their execution order via drag-and-drop and edge connections.

![Text node.jpeg](https://file.notion.so/f/f/bd075709-aeb9-477a-aa0d-347a38181da2/75974f28-7e11-4222-b99f-83ae626dc6b8/Text_node.jpeg?table=block&id=118525ef-afef-4cf8-b073-d813ce8493b2&spaceId=bd075709-aeb9-477a-aa0d-347a38181da2&expirationTimestamp=1752890400000&signature=qGnlgt9bCWEoYslcBAsuf1tKNaCTpjiHbinlC3qss8k&downloadName=Text+node.jpeg)

---

## 🚀 Features

### 1. Text Node
- The flow currently supports **Text Message nodes**.
- Multiple nodes can be added.
- Nodes are dragged from the sidebar into the canvas.

### 2. Nodes Panel
- Lists all node types supported.
- Currently includes only the Message Node.
- Designed to be **extensible** for future node types.

### 3. Edge (Connections)
- Connects two nodes visually.
- **Source Handle:** only one edge can originate.
- **Target Handle:** multiple edges can connect.

### 4. Settings Panel
- Appears when a node is selected.
- Allows editing the node's message text.

![Settings panel.jpeg](https://file.notion.so/f/f/bd075709-aeb9-477a-aa0d-347a38181da2/38e424e4-01cd-462b-a4af-29de9d2c404c/Settings_panel.jpeg?table=block&id=7ae6c90f-b3d5-47e9-9d12-0d0b7275bf5f&spaceId=bd075709-aeb9-477a-aa0d-347a38181da2&expirationTimestamp=1752890400000&signature=ktWk0OgHa6ZhI8pSyVMywok6HeqnuouO-mbIKOjX52s&downloadName=Settings+panel.jpeg)

### 5. Save Button
- Saves the current flow.
- ❗ **Validation:** An error is shown if there are multiple nodes and **more than one node has no incoming connection** (i.e. empty target handles).

![Save flow error](https://file.notion.so/f/f/bd075709-aeb9-477a-aa0d-347a38181da2/b33c6166-aa3e-4c1a-b1b8-1dbd010e1e2e/Screenshot_2022-10-24_at_10.41.29_PM.png?table=block&id=fcd6da61-a9da-42e5-a341-77871648de6e&spaceId=bd075709-aeb9-477a-aa0d-347a38181da2&expirationTimestamp=1752890400000&signature=BxLiSMWdZ99FhKTkQ7hNO9CNY9cUSAZaopKu30j8iHg&downloadName=Screenshot+2022-10-24+at+10.41.29+PM.png)

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **React Flow** (`@xyflow/react`)
- **Bootstrap** (UI)
- **React Hot Toast** (notifications)

---

## 📦 How to Run Locally

```bash
git clone https://github.com/devopslayer/cbflow.git
cd cbflow
npm install
npm run dev

