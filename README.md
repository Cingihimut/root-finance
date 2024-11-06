# Root Finance

Root Finance is a decentralized investment management platform that helps users optimize their returns from Ethena's 13% APY on USDe stablecoins. It allows investors, especially beginners, to benefit from diversified DeFi yield strategies without needing to actively monitor the market. By leveraging various DeFi protocols, Root Finance manages user assets across different risk profiles to maximize yield.

## Table of Contents

- [Background](#background)
- [Features](#features)
- [Risk Profiles](#risk-profiles)
- [Smart Contract Design](#smart-contract-design)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Background

Root Finance addresses key challenges for beginner investors, including price volatility, market complexity, and limited time for monitoring. It combines Ethena's stable 13% APY on USDe with DeFi strategies, utilizing platforms like **Pendle**, **Morpho**, and **Uniswap** to optimize returns. This approach mimics traditional mutual funds with a focus on asset diversification and risk-adjusted yield.

## Features

- **Decentralized Investment Management**: Automates yield generation across multiple DeFi protocols.
- **Flexible Risk Profiles**: Users select risk profiles (Conservative, Moderate, or Aggressive) that dictate asset allocation.
- **Dynamic Yield Allocation**: Funds are allocated and rebalanced according to market conditions and yield optimization.
- **Passive Income**: Users earn a stable 13% APY plus additional returns from DeFi yield strategies without active market monitoring.

## Risk Profiles

Root Finance offers three main risk profiles, each with unique asset allocations:

1. **Conservative**:
   - 60% Stable Volatility (e.g., BTC)
   - 30% Moderate Volatility (e.g., XRP)
   - 10% High Volatility (e.g., SHIB)
   
2. **Moderate**:
   - 50% Stable Volatility
   - 30% Moderate Volatility
   - 20% High Volatility

3. **Aggressive**:
   - 20% Stable Volatility
   - 20% Moderate Volatility
   - 60% High Volatility

This structure diversifies user funds according to the chosen risk profile to balance potential yield and market risk.

## Smart Contract Design

Root Finance uses a set of smart contracts to manage and automate investments:

- **Main Contract**: Manages user funds, allocates them based on risk profile, and tracks performance.
- **Risk Profile Allocation**: Distributes funds across different asset categories based on user-selected risk profile.
- **Rebalancing Mechanism**: Regularly rebalances assets to maximize yield across changing market conditions.
- **Yield Calculation**: Uses the formula `Total = Initial Investment × (1 + APY)` to calculate returns.

### Key Functions

- `setRiskProfile`: Allows users to select their preferred risk profile.
- `investFunds`: Allocates funds across various DeFi platforms based on the selected profile.
- `calculateYield`: Computes the annual yield.
- `withdrawYield`: Lets users withdraw their earned yield.
- `rebalancePortfolio`: Optimizes asset distribution periodically to maximize returns.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/root-finance.git
cd root-finance
npm install
