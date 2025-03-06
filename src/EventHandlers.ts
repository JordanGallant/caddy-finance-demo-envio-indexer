/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Positions,
  Positions_PositionExercised,
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