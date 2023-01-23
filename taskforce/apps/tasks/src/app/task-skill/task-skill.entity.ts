import {Entity} from '@taskforce/core';
import {Skill} from '@taskforce/shared-types';

export class TaskSkillEntity implements Entity<TaskSkillEntity>, Skill {
  public id: number;
  public name: string;

  constructor(skill: Skill) {
    this.fillEntity(skill);
  }

  fillEntity(entity: Skill) {
    this.name = entity.name;
    this.id = entity.id;
  }

  toObject(): TaskSkillEntity {
    return {...this};
  }
}
