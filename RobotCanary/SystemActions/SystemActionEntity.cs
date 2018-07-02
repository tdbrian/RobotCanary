using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FlaskStudio.Users
{
    public class SystemActionEntity
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        public List<string> DomainTags { get; set; }

        [Required]
        public Guid OrganizationId { get; set; }
    }
}
