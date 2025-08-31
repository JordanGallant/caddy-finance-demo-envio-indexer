/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */

//SS
import {
  Positions,
  Positions_PositionExercised,
  Positions_PositionOpened,
  ERC20,
  ERC20_Approval,
  ERC20_Transfer,
  NFT,
  NFT_ApprovalForAll,
  NFT_Approval,
  NFT_RoleGranted,
  NFT_PriceUpdated,
  NFT_RoleRevoked,
  NFT_Transfer,
  NFT_PositionOpened,
  NFT_RoleAdminChanged
} from "generated";

const createTrader = async (address: string, context: any) => {
  let trader = await context.Trader.get(address)

  if (!trader) {
     trader = {
       id: address,
       address: address,      
     }
     context.Trader.set(trader);
  } 
} 

Positions.PositionExercised.handler(async ({ event, context }) => {
  const entity: Positions_PositionExercised = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    trader: event.params.trader,
    amount: event.params.amount,
    settlementAmount: event.params.settlementAmount,
  };

  context.Positions_PositionExercised.set(entity);
});

Positions.PositionOpened.handler(async ({ event, context }) => {
  const entity: Positions_PositionOpened = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    trader: event.params.trader,
    premium: event.params.premium,
    isLong: event.params.isLong,
    isCall: event.params.isCall,
  };

  context.Positions_PositionOpened.set(entity);
  await createTrader(event.params.trader, context);
});

ERC20.Approval.handler(async ({ event, context }) => {
  const entity: ERC20_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.ERC20_Approval.set(entity);
});

ERC20.Transfer.handler(async ({ event, context }) => {
  const entity: ERC20_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.ERC20_Transfer.set(entity);
});

//NFT EVENT HANDLERS
NFT.Approval.handler(async ({ event, context }) => {
  const entity: NFT_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.NFT_Approval.set(entity);
});

NFT.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: NFT_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.NFT_ApprovalForAll.set(entity);
});

NFT.PositionOpened.handler(async ({ event, context }) => {
  const entity: NFT_PositionOpened = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenId: event.params.tokenId,
    trader: event.params.trader,
    positionType: event.params.positionType,
    amount: event.params.amount,
    strikePrice: event.params.strikePrice,
  };

  context.NFT_PositionOpened.set(entity);

  await createTrader(event.params.trader, context);
});

NFT.PriceUpdated.handler(async ({ event, context }) => {
  const entity: NFT_PriceUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldPrice: event.params.oldPrice,
    newPrice: event.params.newPrice,
    updater: event.params.updater,
  };

  context.NFT_PriceUpdated.set(entity);
});

NFT.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity: NFT_RoleAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };

  context.NFT_RoleAdminChanged.set(entity);
});

NFT.RoleGranted.handler(async ({ event, context }) => {
  const entity: NFT_RoleGranted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.NFT_RoleGranted.set(entity);
});

NFT.RoleRevoked.handler(async ({ event, context }) => {
  const entity: NFT_RoleRevoked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };

  context.NFT_RoleRevoked.set(entity);
});

NFT.Transfer.handler(async ({ event, context }) => {
  const entity: NFT_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.NFT_Transfer.set(entity);
});

//caddy