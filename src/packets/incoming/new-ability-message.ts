import { Writer } from '../../writer';
import { Reader } from '../../reader';
import { PacketType } from '../../packet-type';
import { Packet } from '../../packet';

/**
 * Received when a new ability has been unlocked by the player.
 */
export class NewAbilityMessage implements Packet {

  type = PacketType.NEW_ABILITY;
  propagate = true;

  //#region packet-specific members
  /**
   * The type of ability which has been unlocked.
   */
  abilityType: number;
  //#endregion

  read(reader: Reader): void {
    this.abilityType = reader.readInt32();
  }

  write(writer: Writer): void {
    writer.writeInt32(this.abilityType);
  }
}
