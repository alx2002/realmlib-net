import { Writer } from '../../../writer';
import { Reader } from '../../../reader';
import { PacketType } from '../../../packet-type';
import { Packet } from '../../../packet';

/**
 * Received when the player has been killed in the arena.
 */
export class ArenaDeathPacket implements Packet {

  type = PacketType.ARENA_DEATH;
  propagate = true;

  //#region packet-specific members
  /**
   * The cost in gold to be revived.
   */
  cost: number;
  //#endregion

  read(reader: Reader): void {
    this.cost = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.cost);
  }
}
