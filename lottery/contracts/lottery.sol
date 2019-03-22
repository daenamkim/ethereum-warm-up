pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        // 1 eth must be paid
        require(msg.value > .01 ether);

        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        // psudo randomness
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickwinner() public {
        require(msg.sender == manager);

        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    function getAllPlayers() public view returns (address[]) {
        return players;
    }
}
