import { Pipe, PipeTransform } from '@angular/core';
import { ITeamInfo } from '../interfaces/team.interface';

@Pipe({
  name: 'searchTeams',
  standalone: true
})
export class SearchTeamsPipe implements PipeTransform {

  transform(teamsInfo: ITeamInfo[], name: string): ITeamInfo[] {
    return teamsInfo.filter(teamInfo => 
      teamInfo.team.name
        .toLowerCase()
        .includes(name.toLowerCase())
    );
  }

}
