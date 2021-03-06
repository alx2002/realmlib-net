import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received to notify the player that a new skin has been unlocked.
 */
export class ReskinUnlockPacket implements Packet {

  type = PacketType.RESKIN_UNLOCK;
  propagate = true;

  //#region packet-specific members
  /**
   * The id of the skin that was unlocked.
   */
  skinId: number;
  //#endregion

  read(reader: Reader): void {
    this.skinId = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.skinId);
  }
}
